<template>
  <div>
    <div class="home">
      <router-link to="/">
        <v-icon class="pr-1">mdi-apps</v-icon>
        Trang Chủ
      </router-link>
    </div>
    <div v-for="(item, index) in items" :key="index" class="pr-2">
      <v-expansion-panels flat focusable>
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon>
            <div class="">
              <v-icon class="pr-2">{{ item.icon }}</v-icon
              >{{ item.title }}
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            v-for="(dropdown, index) in items[index].dropdown"
            :key="index"
            class="ml-4"
          >
            <router-link :to="dropdown.url">
              {{ dropdown.title }}
            </router-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-file-document",
          title: "Dự án",
          dropdown: [
            {
              title: "Danh Sách Dự Án",
              url: "/project",
            },
            {
              title: "Deadlines",
              url: "/deadlines",
            },
          ],
        },
        {
          icon: "mdi-account-multiple",
          title: "Nhân sự",
          dropdown: [
            {
              title: "Danh Sách Nhân Viên",
              url: "/staffs",
            },
            {
              title: "Danh Sách Hợp Đồng",
              url: "/contracts",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 16px 24px !important;
}

a {
  text-decoration: none;
  color: black !important;

  &:hover {
    color: #18bcc7 !important;
  }
}
</style>
