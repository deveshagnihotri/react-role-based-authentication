import React, { Component } from 'react';
import './HomePage.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import apiData from '../../data/data.json';
import { handleRolesAction } from '../../utils/data';
import AddModal from '../common/addModal';
import { handleValidation } from '../../utils/data';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: apiData,
      modalShow: false,
      isLogout: false
    };
  }

  render() {
    let userData = this.props.location.data;
    let result = handleRolesAction(userData);
    let resultResponse = result !== undefined && result.res === 'admin';

    const getActionHeading = () => {
      if (resultResponse) {
        return (
          <td>
            <h3>Action</h3>
          </td>
        );
      }
    };

    const getActionButton = item => {
      if (resultResponse) {
        return (
          <td>
            <Button
              variant="danger"
              onClick={() => handleDelete(item, apiData)}
            >
              Delete
            </Button>
          </td>
        );
      }
    };

    const handleNewItem = (name, email, bike, owner) => {
      let valid = handleValidation(email, this.state.data);
      let updateData = {
        name,
        email,
        bike,
        owner
      };
      if (valid === false) {
        this.setState({
          data: this.state.data.concat(updateData)
        });
        toast.success('user added');
      } else {
        toast.warn('Email id already exist');
      }
    };

    const getAddButton = () => {
      if (resultResponse) {
        return (
          <div className="py-3">
            <ButtonToolbar>
              <Button
                variant="success"
                onClick={() => {
                  this.setState({ modalShow: true });
                }}
              >
                Add New Item
              </Button>
            </ButtonToolbar>
            <AddModal
              show={this.state.modalShow}
              onHide={e => this.setState({ modalShow: false })}
              handlesubmit={(name, email, bike, owner) =>
                handleNewItem(name, email, bike, owner)
              }
            ></AddModal>
          </div>
        );
      }
    };

    const handleDelete = item => {
      let afterDelete = this.state.data.filter(res => res.email !== item.email);
      this.setState({
        data: afterDelete
      });
      toast.warn(item.name, +'deleted');
    };

    const handleLogOut = () => {
      this.setState({
        isLogout: true
      });
    };

    if (this.state.isLogout === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div>
          <Button
            variant="primary"
            style={{ float: 'right' }}
            onClick={() => handleLogOut()}
          >
            LogOut
          </Button>
        </div>
        <div>
          {userData !== undefined &&
            userData.map((item, id) => (
              <div key={id}>
                <h4>
                  <b>Name: </b>
                  {item.name}
                </h4>
                <h4>
                  <b>Email: </b>
                  {item.email}
                </h4>
                <h4>
                  <b>Resource: </b>
                  {item.resourse}
                </h4>
              </div>
            ))}
        </div>
        <div>{getAddButton()}</div>
        <div className="App-table">
          <table className="table-container">
            <thead className="table-header">
              <tr>
                <td>
                  <h3>Id</h3>
                </td>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <h3>Email</h3>
                </td>
                <td>
                  <h3>Bikes</h3>
                </td>
                <td>
                  <h3>Owner</h3>
                </td>
                {getActionHeading()}
              </tr>
            </thead>
            <tbody className="table-body">
              {this.state.data.map((item, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.bike}</td>
                  <td>{item.owner}</td>
                  {getActionButton(item)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HomePage;
