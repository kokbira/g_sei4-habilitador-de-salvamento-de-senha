chrome.storage.sync.get(["enabled"], function(result) {
  if (result.enabled) {
    const senhaDiv = document.getElementById('divSenha');
    if (senhaDiv) {
      senhaDiv.innerHTML = `
        <span class="input-group-prepend">
          <span class="input-group-text"><img src="svg/cadeado.svg"></span>
        </span>
        <span class="input-group"><input type="password" name="pwdSenha" class="form-control masked"></span>
      `;
    }
  }
});
