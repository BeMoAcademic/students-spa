<template>
  <div class="login" id="app">
    <div class="page-wrapper">
      <div class="flex-center-container">
        <div class="row fade-transition">
          <div class="col-xs-12 col-sm-6 center-block" style="float: none">
            <div class="col-xs-12 col-md-6 center-block">
              <div class="text-center">
                <img alt="Vue logo" src="../../assets/logo.png">
              </div>
              <div class="panel panel-default">
                <div class="panel-heading text-center">Welcome to BeMo® student member’s area!<br>Please log in to
                  begin:
                  <span v-text="title"></span>
                </div>
                <div class="panel-body">
                  <form ref="form">
                    <div class="form-group">
                      <label for="email">Username</label>
                      <input id="email" type="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input id="password" type="password" class="form-control" required>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="checkbox">
                          <label>Remember Me</label>
                          <input type="checkbox" name="remember">
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <a class="btn btn-link" style="padding: 8px 12px"
                           href="#">Forgot
                          Password</a>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- include footer -->
    </div>
  </div>
</template>

<script>
import HttpService from "../../HttpService.js";
export default {
  name: 'Login',

  data() {
    return {
      title: false,
    }
  },
}
</script>