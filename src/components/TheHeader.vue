<template>
    <el-header class="custom-header">
      <div class="logo">Desempenho Acadêmico</div>
    </el-header>
  </template>
  
  <script>
  export default {
    name: 'TheHeader',
    // ... outras definições
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para o componente HeaderElement */
  .custom-header {
    background-color: #ffff;
    color: black;
    padding: 0 20px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-right: 20px;
    line-height: 60px;
  }
  
  .menu {
    line-height: 60px;
  }
  
  .el-menu-item {
    padding: 0 15px;
  }
  </style>
  