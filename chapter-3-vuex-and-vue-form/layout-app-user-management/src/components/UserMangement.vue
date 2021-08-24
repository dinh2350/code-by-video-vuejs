<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">User Management</h4>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Name"
                />
                <div class="input-group-append">
                  <button class="btn btn-sm btn-gradient-primary" type="button">
                    <i class="mdi mdi-account-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <button class="btn btn-lg btn-gradient-primary" @click="onOpen">
              <i class="mdi mdi-account-plus"></i> Add User
            </button>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name|Image</th>
                  <th>Programming Language</th>
                  <th>Gender</th>
                  <th>Type User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="assets/images/faces/face1.jpg"
                      class="mr-2"
                      alt="image"
                    />
                    Nguyễn Phong Hào
                  </td>
                  <td>
                    <span class="badge bg-secondary mr-2">JavaScript</span>
                    <span class="badge bg-secondary mr-2">Java</span>
                    <span class="badge bg-secondary mr-2">C++</span>
                  </td>
                  <td>Nam</td>
                  <td>
                    <label class="badge badge-gradient-success">ADMIN</label>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-gradient-danger btn-rounded btn-icon"
                      >
                        <i class="mdi mdi-account-remove"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-gradient-info btn-rounded btn-icon ml-2"
                      >
                        <i class="mdi mdi-table-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/faces/face1.jpg"
                      class="mr-2"
                      alt="image"
                    />
                    Nguyễn Phong Hào
                  </td>
                  <td>
                    <span class="badge bg-secondary mr-2">JavaScript</span>
                    <span class="badge bg-secondary mr-2">Java</span>
                    <span class="badge bg-secondary mr-2">C++</span>
                  </td>
                  <td>Nam</td>
                  <td>
                    <label class="badge badge-gradient-success">ADMIN</label>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-gradient-danger btn-rounded btn-icon"
                      >
                        <i class="mdi mdi-account-remove"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-gradient-info btn-rounded btn-icon ml-2"
                      >
                        <i class="mdi mdi-table-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/faces/face1.jpg"
                      class="mr-2"
                      alt="image"
                    />
                    Nguyễn Phong Hào
                  </td>
                  <td>
                    <span class="badge bg-secondary mr-2">JavaScript</span>
                    <span class="badge bg-secondary mr-2">Java</span>
                    <span class="badge bg-secondary mr-2">C++</span>
                  </td>
                  <td>Nam</td>
                  <td>
                    <label class="badge badge-gradient-success">ADMIN</label>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-gradient-danger btn-rounded btn-icon"
                      >
                        <i class="mdi mdi-account-remove"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-gradient-info btn-rounded btn-icon ml-2"
                      >
                        <i class="mdi mdi-table-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/faces/face1.jpg"
                      class="mr-2"
                      alt="image"
                    />
                    Nguyễn Phong Hào
                  </td>
                  <td>
                    <span class="badge bg-secondary mr-2">JavaScript</span>
                    <span class="badge bg-secondary mr-2">Java</span>
                    <span class="badge bg-secondary mr-2">C++</span>
                  </td>
                  <td>Nam</td>
                  <td>
                    <label class="badge badge-gradient-success">ADMIN</label>
                  </td>
                  <td>
                    <div>
                      <button
                        type="button"
                        class="btn btn-gradient-danger btn-rounded btn-icon"
                      >
                        <i class="mdi mdi-account-remove"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-gradient-info btn-rounded btn-icon ml-2"
                      >
                        <i class="mdi mdi-table-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-modal :isOpen="isOpen" :onClose="onClose">
    <div class="container">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="eamil">Email address</label>
          <input
            type="email"
            class="form-control"
            id="eamil"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="age"
          />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
          />
        </div>
        <div class="form-gruop">
          <label for="">Programming Language</label>
          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> JavaScript
                <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> Java
                <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> C#
                <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> Python
                <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> PHP
                <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" /> C/C++
                <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender</label>
          <div class="d-flex align-items-center">
            <div class="form-check mr-2">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="" />
                Nam <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-2">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="" />
                Nữ <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-2">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="" />
                Khác <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User</label>
          <div class="col-sm-9">
            <select class="form-control">
              <option>Admin</option>
              <option>Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-gradient-primary mr-2">
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </app-modal>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
  },
};
</script>

<style></style>
