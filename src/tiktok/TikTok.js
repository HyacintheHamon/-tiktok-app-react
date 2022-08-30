/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <a href={url} className="tiktok-login-btn">
        <img src="/tiktok-icon.svg" className="tiktok-icon" alt="tiktok icon" />
        <div className="tiktok-login-btn-text">
          <a>Sign In with TikTok</a>
        </div>
      </a>
      <div className="separator" />
      <a href={url} className="tiktok-login-btn dark">
        <img
          src="/tiktok-icon-white.svg"
          className="tiktok-icon"
          alt="tiktok icon"
        />
        <div className="tiktok-login-btn-text">
          <a>Sign In with TikTok</a>
        </div>
      </a>
    </div>
  );
}

export default TikTok;
