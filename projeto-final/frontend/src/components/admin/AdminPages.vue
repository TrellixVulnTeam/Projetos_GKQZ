<template>
  <div class="adminPages">
    <PageTitle
      icon="fa fa-cogs"
      mainTitle="Administração do Sistema"
      subTitle="Cadastros e Cia"
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Artigos">
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoriesAdmin />
          </b-tab>
          <b-tab title="Usuários" active>
            <UsersAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import ArticleAdmin from "./articleAdmin.vue";
import CategoriesAdmin from "./CategoriesAdmin.vue";
import UsersAdmin from "./UsersAdmin.vue";

export default {
  name: "AdminPages",
  components: { PageTitle, ArticleAdmin, CategoriesAdmin, UsersAdmin },
};
</script>

<style>
</style>