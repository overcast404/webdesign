<template>
  <div id="leftnav">
    <div id="in">
      <img id="avatar" src="../../assets/img/useravatar/useravatar.png" alt />

      <h2>Overcast404</h2>
    </div>
    <div id="usertable">
      <table>
        <tr>
          <td>关注</td>
          <td>
            <Divider type="vertical" />
          </td>
          <td>粉丝</td>
          <td>
            <Divider type="vertical" />
          </td>
          <td>帖子</td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <Divider type="vertical" />
          </td>
          <td>2</td>
          <td>
            <Divider type="vertical" />
          </td>
          <td>3</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#leftnav {
  //270
  width: 260px;
  height: 230px;
  background-color: rgb(252, 233, 208);
  border-radius: 5px;
  margin: 5px;
  position: sticky;
  top: 0;
}

#in {
  width: 240px;
  text-align: center;
  margin: 10px auto;
}
#avatar {
  width: 100px;
  border-radius: 5px;
}
#usertable {
    text-align: center;
}
#usertable table{
    margin:auto
}
</style>