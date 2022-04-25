<template>
  <div class="form-base fullscreen d-flex justify-center align-center">
    <div class="form-login">
      <v-container>
        <h2>Vui lòng đăng nhập</h2>
        <div>
          <v-text-field
            prepend-inner-icon="mdi-account"
            outlined
            background-color="white"
            placeholder="Tên đăng nhập"
            dense
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="isShowPassword ? 'text' : 'password'"
            placeholder="Password"
            class="input-group--focused"
            @click:append="isShowPassword = !isShowPassword"
            background-color="white"
            outlined
            dense
            prepend-inner-icon="mdi-briefcase"
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-btn depressed dark color="#39afc6" class="mb-2"> Đăng Nhập </v-btn>
          <v-btn depressed dark color="#de4958"> Login with Google </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      isShowPassword: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 4 || "Min 4 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.form-base {
  display: block;
}
.form-login {
  width: 400px;
  text-align: center;
  color: white;
  background-color: #1a4f93;
  border-radius: 10px;
  padding: 20px;
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}

</style>
