import React from 'react';

const ServiceListPage = () => {
  const services = [
    { name: 'オフショア開発～設計', price: '$100' },
    { name: 'ソフトウェア設計・開発', price: '$200' },
    { name: 'システム運用保守', price: '$150' },
    { name: 'スマートソリューション', price: '$250' },
    { name: 'DXコンサルティング、サービス開発', price: '$300' },
  ];

  return (
    <div style={{ height: '100vh', backgroundColor: 'DarkSeaGreen', overflow: 'hidden' }}>
      <h1>問い合わせ</h1>

      <form
        action="https://greentech.jp/contact/#wpcf7-f27-o1"
        method="post"
        className="wpcf7-form init"
        aria-label="コンタクトフォーム"
        noValidate="novalidate"
        data-status="init"
      >
        <div style={{ display: "none" }}>
          <input type="hidden" name="_wpcf7" defaultValue={27} />
          <input type="hidden" name="_wpcf7_version" defaultValue="5.8.1" />
          <input type="hidden" name="_wpcf7_locale" defaultValue="ja" />
          <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f27-o1" />
          <input type="hidden" name="_wpcf7_container_post" defaultValue={0} />
          <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue="" />
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <h3 className="contact-require">会社名または氏名</h3>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <label>
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid="false"
                    defaultValue=""
                    type="text"
                    name="your-name"
                  />
                </span>{" "}
              </label>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <h3 className="contact-require">メールアドレス</h3>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <label>
                <span className="wpcf7-form-control-wrap" data-name="your-email">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid="false"
                    defaultValue=""
                    type="text"
                    name="your-email"
                  />
                </span>{" "}
              </label>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <h3 className="contact-require">お問い合わせ内容</h3>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <label>
                <span className="wpcf7-form-control-wrap" data-name="your-message">
                  <textarea
                    cols={40}
                    rows={10}
                    className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                    aria-required="true"
                    aria-invalid="false"
                    name="your-message"
                    defaultValue={""}
                  />
                </span>{" "}
              </label>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <p>
              <input
                className="wpcf7-form-control wpcf7-submit has-spinner btn btn-primary contact-btn"
                type="submit"
                defaultValue="送信する"
              />
              <span className="wpcf7-spinner" />
            </p>
          </div>
        </div>
        <div className="wpcf7-response-output" aria-hidden="true" />
      </form>




      <h1>サービスリストと価格</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name} 　　　　　　　　　　　　{service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPage;
