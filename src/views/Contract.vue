<template>
  <div class="">
    <h2>Danh sách hợp đồng</h2>
    <v-row>
      <v-col cols="3">
        <v-select
          dense
          :items="job"
          item-text="text"
          label="Tìm Kiếm"
          v-model="contracId"
          outlined
          color="black"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field
          outlined
          append-icon="mdi-magnify"
          dense
          color="black"
          v-model="username"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          dense
          :items="items"
          label="Chọn bảng ghi"
          v-model="select"
          outlined
          color="black"
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn outlined>
          Tìm Kiếm
          <v-progress-circular
            indeterminate
            size="20"
            color="yellow darken-2"
          ></v-progress-circular
        ></v-btn>
      </v-col>
    </v-row>
    <v-progress-linear
      indeterminate
      color="yellow darken-2"
      v-show="loader"
    ></v-progress-linear>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">STT</th>
            <th class="text-left">Tên Nhân Viên</th>
            <th class="text-left">Ngày Vào Công Ty</th>
            <th class="text-left">Hợp Đồng Hiện Tại</th>
            <th class="text-left">Số Năm Kinh Nhiệm</th>
            <th class="text-left">Thác Tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listContract" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.joined_date }}</td>
            <td>{{ item.contract_name }}</td>
            <td>{{ item.number_years_experience }}</td>
            <td>
              <v-btn icon>
                <v-icon color="black">mdi-pencil</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center d-flex justify-center">
      <v-pagination
        v-if="maxPaging"
        v-model="page"
        :length="maxPaging"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ContractComponent",
  data() {
    return {
      items: [5, 10, 15, 20],
      // selecJob: { id: "", text: "Tất cả" },
      job: [
        { id: "", text: "Tất cả" },
        { id: 1, text: "Thực tập sinh" },
        { id: 2, text: "Hợp đồng 1 năm" },
        { id: 3, text: "Hợp đồng 3 năm" },
        { id: 4, text: "Hợp đồng thử việc" },
        { id: 5, text: "Hợp đồng học việc" },
        { id: 6, text: "Không xác định thời hạn" },
      ],
      select: 5,
      contracId: "Tất cả",
      loader: false,
      page: 1,
      username: "",
    };
  },
  computed: {
    ...mapState("listContract", ["listContract", "pages"]),
    maxPaging() {
      const { numberItemPerPage, totalElements } = this.pages;
      return Math.ceil(totalElements / numberItemPerPage);
    },
    check() {
      let id = "";
      this.job.forEach((item) => {
        if (item.text == this.contracId) {
          id = item.id;
        }
      });
      return id;
    },
  },
  mounted() {
    this.getListContract({
      page: this.page,
      select: this.select,
      contractId: this.check,
      username: this.username,
    });
  },
  watch: {
    select(newVal) {
      this.getListContract({
        page: this.page,
        select: newVal,
        contractId: this.check,
        username: this.username,
      });
      this.loader = true;
    },
    listContract() {
      this.loader = false;
    },
    page(newVal) {
      this.getListContract({
        page: newVal,
        select: this.select,
        contractId: this.check,
        username: this.username,
      });
    },
    contracId() {
      this.getListContract({
        page: this.page,
        select: this.select,
        contractId: this.check,
        username: this.username,
      });
    },
    username() {
      this.getListContract({
        page: this.page,
        select: this.select,
        contractId: this.check,
        username: this.username,
      });
    },
  },
  methods: {
    ...mapActions("listContract", ["getListContract"]),
  },
};
</script>

<style lang="scss" scoped>
.paging {
  width: 100%;
}
</style>
