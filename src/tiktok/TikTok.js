import "./TikTok.css";

function TikTok() {
  const CLIENT_KEY = "awrg96l9zg7rhvmk";
  const SERVER_ENDPOINT_REDIRECT = "https://mono.credit/auth/login/success";
  const csrfState = Math.random().toString(36).substring(2);

  let url = "https://www.tiktok.com/auth/authorize/";

  url += `?client_key=${CLIENT_KEY}`;
  url += "&scope=user.info.basic,video.list";
  url += "&response_type=code";
  url += `&redirect_uri=${SERVER_ENDPOINT_REDIRECT}`;
  url += "&state=" + csrfState;

  return (
    <div className="App">
      <div className="tiktok-login-btn">
        <img src="/tiktok-icon.svg" className="tiktok-icon" alt="tiktok icon" />
        <div href={url} className="tiktok-login-btn-text">
          <a href={url}>Sign In with TikTok</a>
        </div>
      </div>
      <div className="separator" />
      <div className="tiktok-login-btn dark">
        <img
          src="/tiktok-icon-white.svg"
          className="tiktok-icon"
          alt="tiktok icon"
        />
        <div className="tiktok-login-btn-text" href={url}>
          <a href={url}>Sign In with TikTok</a>
        </div>
      </div>
    </div>
  );
}

export default TikTok;
