<template>
  <div class="card">
    <div class="card-content">
      <div class="card-content2">
        <h2 class="card-title">Kauã Borgarelli</h2>
        <p class="card-description">Nome do aluno</p>
      </div>
    </div>
    <img  class="imagem" alt="exit" src="@/assets/portal-close.png">
  </div>
</template>

<script>
export default {
  name: 'CardAluno',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
      display: flex;
      margin: auto;
      width: 360px;
      padding: 2px 2px;
      border-radius: 12px 12px 0px 0px;
      border: 1px;
      background-color: linear-gradient(0deg, #E8ECEF, #E8ECEF),
      linear-gradient(0deg, #FFFFFF, #FFFFFF);
      border: 1px solid #E8ECEF;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 35px;
    }

    .card-content{
      display: flex;
      align-items: flex-start;
      gap: 17px;
    }
    
    .card-title {
      color: var(--secondary-lead, #434E5B);
      font-family: Nunito;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    
    .card-description {
      color: var(--gray-70, #748494);
      font-family: Nunito;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .card-content2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .imagem {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
    }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
