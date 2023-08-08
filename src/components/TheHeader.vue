<template>
    <el-header class="custom-header">
      <div class="logo">Desempenho Acadêmico</div>
      <img class="burguer" alt="menu" src="@/assets/burguer.png">
    </el-header>
  </template>
  
  <script>
  export default {
    name: 'TheHeader',

  }
  </script>
  
  <style scoped>
  
  .custom-header {    
    width: 100%;
    height: 60px;
    background: #fff;
    border-radius: 0 0 12px 12px;
    border: 2px solid var(--gray-30, #E8ECEF);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .logo {
    color: var(--secondary-lead, #434E5B);
    margin: 12px;
    font-size: 26px;color: var(--secondary-lead, #434E5B);
    margin: 12px;
    font-size: 26px;
  }
  
  .burguer{
    color: var(--secondary-lead, #434E5B);
    margin: 12px;
    font-size: 26px;
  }
  </style>
  