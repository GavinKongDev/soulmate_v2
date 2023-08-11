import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

const Home = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "SoulMate 搜美",
          text: "點擊加入開始與 Soulmate 搜美暢聊!",
          url: "https://qa.eguider.com.tw/",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      const copyText = "https://qa.eguider.com.tw/";
      try {
        await navigator.clipboard.writeText(copyText);
        enqueueSnackbar("已複製網址");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col items-center">
      {/* section1 */}
      <div className="w-[1366px] h-[1475px] relative overflow-x-clip mx-auto bg-[url('/assets/desktop/bg1.png')]">
        {/* icons */}
        <div>
          <img
            src="/assets/desktop/eguider_icon.png"
            alt="eguider_icon"
            className="absolute h-[49px] w-[178px] left-[80px] top-[20px]"
          />
          <img
            src="assets/desktop/soulmate_icon.png"
            alt="soulmate_icon"
            className="absolute h-[26px] w-[146px] left-[284px] top-[32px]"
          />
        </div>

        <img
          src="assets/desktop/curve1.png"
          alt="curve1"
          className="absolute w-[206px] h-[497px] top-[140px]"
        />

        <img
          src="assets/desktop/phone1.png"
          alt="phone1"
          className="absolute h-[600px] w-[890px] left-[396px] top-[80px] object-contain"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        />

        {/* 好消息 */}
        <img
          src="assets/desktop/goodnews.png"
          alt="goodnews"
          className="absolute h-[224px] w-[500px] left-[160px] top-[110px]"
          data-aos="zoom-out"
          data-aos-once="true"
        />

        {/* 搜美是你的私人口袋顧問 */}
        <div className="flex mx-auto mt-[50px] w-[320px] h-[120px]">
          <img
            src="assets/desktop/arrow_purple.svg"
            className="absolute w-[38px] h-[30px] left-[30px] top-[670px]"
          />
          <div className="absolute w-[360px] h-[118px] left-[79px] top-[654px] text-[40px] text-white">
            Soulmate搜美
            <br />
            是你的
            <span className="text-[#00cde6]">私人口袋顧問</span>
          </div>
          <img
            src="assets/desktop/beta.svg"
            className="absolute w-[140px] h-[125px] left-[368px] top-[591px]"
          />
          <a href="https://lin.ee/BAa3w9g" target="__blank">
            <img
              src="assets/desktop/addfriend_button.svg"
              className="absolute w-[190px] h-[56px] left-[479px] top-[716px] cursor-pointer"
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-once="true"
            />
          </a>
          <img
            src="assets/desktop/arrow_white.svg"
            className="absolute w-[38px] h-[30px] left-[709px] top-[729px]"
            data-aos="flip-left"
            data-aos-delay="700"
            data-aos-once="true"
          />
        </div>

        {/* 分隔線 */}
        <div>
          <div className="absolute w-[603px] h-[2px] left-[80px] top-[802px] bg-[#00cde6]"></div>
          <div className="absolute w-[603px] h-[2px] left-[683px] top-[802px] bg-[#7600da]"></div>
        </div>

        {/* Soulmate搜美是什麼？ */}
        <div>
          <img
            src="assets/desktop/arrow_white.svg"
            className="absolute w-[38px] h-[30px] left-[80px] top-[834px]"
          />
          <div className="absolute w-[318x] h-[45px] left-[80px] top-[885px] text-[30px] text-white">
            Soulmate搜美是什麼？
          </div>
          <div className="absolute w-[660px] h-[189px] left-[80px] top-[950px] text-[20px] text-[#00cde6]">
            Soulmate搜美是一款AI對話軟體，它就像是你的專屬營養師、醫師、體重管理師……讓理想中的私人管家顧問，陪伴在你身邊，在任何時候，不需要不好意思、不擔心能不能問、更不用害羞去問一些難以啟齒的問題，比方：請計算安全期.....等，只要在對話框中輸入想問的內容，便能獲得專屬回覆！Soulmate搜美，是個能永遠陪伴在你身邊的、最Smart的專屬管家，當然永遠不會洩漏更多的私事給其他人：）
          </div>
        </div>

        {/* Soulmate搜美跟Google搜尋 差別在哪裡？ */}
        <div>
          <img
            src="assets/desktop/arrow_white.svg"
            className="absolute w-[38px] h-[30px] left-[80px] top-[1199px]"
          />
          <div className="absolute w-[569x] h-[45px] left-[80px] top-[1249px] text-[30px] text-white">
            Soulmate搜美跟Google搜尋 差別在哪裡？
          </div>
          <div className="absolute w-[660px] h-[61px] left-[80px] top-[1314px] text-[20px] text-[#00cde6]">
            Google搜尋可一次性給予數百筆結果，Soulmate搜美則能為你統整資訊！此外Soulmate搜美可接續前後文，他就是AI的最高展現。
          </div>
        </div>

        {/* 四宮格 */}
        <div className="absolute w-[315px] h-[315px] left-[796px] top-[885px]">
          <div
            className="absolute left-[0px] top-[0px] w-[230px] h-[230px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <img
              src="assets/mobile/block1.png"
              alt="block1"
              className="absolute w-[139px] h-[116px] left-[46px] top-[40px]"
            />
            <div className="absolute text-[20px] text-white left-[75px] top-[171px]">
              完全免費
            </div>
          </div>
          <div
            className="absolute left-[260px] top-[0px] w-[230px] h-[230px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="assets/mobile/block2.png"
              alt="block2"
              className="absolute w-[139px] h-[116px] left-[46px] top-[40px]"
            />
            <div className="absolute text-[20px] text-white left-[75px] top-[171px]">
              客觀建議
            </div>
          </div>
          <div
            className="absolute left-[0px] top-[260px] w-[230px] h-[230px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6] z-20"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img
              src="assets/mobile/block3.png"
              alt="block3"
              className="absolute w-[119px] h-[118px] left-[56px] top-[40px]"
            />
            <div className="absolute text-[20px] text-white left-[75px] top-[171px]">
              私密對談
            </div>
          </div>
          <div
            className="absolute left-[260px] top-[260px] w-[230px] h-[230px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6] z-20"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img
              src="assets/mobile/block4.png"
              alt="block4"
              className="absolute w-[105px] h-[123px] left-[63px] top-[40px]"
            />
            <div className="absolute text-[20px] text-white left-[75px] top-[171px]">
              博學聰明
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="w-[1366px] h-[1279px] relative overflow-x-clip mx-auto bg-[url('/assets/desktop/bg2.png')]">
        <img
          src="assets/desktop/curve2.png"
          alt="curve2"
          className="absolute w-[1366px] h-[742px] top-[-180px] z-10"
        />

        {/* 了解Soulmate搜美的 特色後，讓我們來看看 該如何使用！ */}
        <div>
          <img
            src="assets/desktop/arrow_white.svg"
            className="absolute w-[38px] h-[30px] left-[80px] top-[30px]"
          />
          <div className="absolute w-[543px] h-[118px] left-[80px] top-[75px] text-[40px] text-[#00cde6]">
            了解Soulmate搜美的特色後，讓我們來看看
            <span className="text-white">該如何使用！</span>
          </div>
        </div>

        {/* 分隔線 */}
        <div>
          <div className="absolute w-[684px] h-[2px] left-[80px] top-[213px] bg-white z-20"></div>
          <div className="absolute w-[170px] h-[2px] left-[764px] top-[213px] bg-[#7600da] z-20"></div>
        </div>

        {/* 發送問題 */}
        <img
          src="assets/desktop/speaker.png"
          alt="speaker"
          className="absolute w-[349px] h-[134px] left-[80px] top-[235px] z-20"
        />

        {/* why */}
        <img
          src="assets/desktop/why.png"
          alt="why"
          className="absolute w-[698px] h-[381px] left-[80px] top-[409px] z-20"
        />
        <div className="absolute w-[390px] h-[108px] left-[164px] top-[622px] text-[24px] text-[#7600da] z-20">
          保養攻略、美妝技巧、醫美解密、保健指南、飲控撇步、身形管理⋯ ⋯
          跟美有關的大小事，通通都能問！
        </div>

        {/* soulmate icon */}
        <img
          src="assets/desktop/soulmate_icon.png"
          alt="soulmate_icon"
          className="absolute w-[340px] h-[60px] left-[818px] top-[617px]"
        />

        {/* 對於該詢問哪些問題沒有想法？ 參考以下提問激發你的想像力！ */}
        <div className="absolute w-[420px] h-[90px] left-[818px] top-[709px] text-white text-[30px]">
          對於該詢問哪些問題沒有想法？ 參考以下提問激發你的想像力！
        </div>

        {/* QA1 */}
        <a href="/soulmate-with-daily-maintenance" target="__blank">
          <div
            className="absolute w-[433px] h-[380px] left-[80px] top-[850px] z-10"
            data-aos="flip-right"
            data-aos-once="true"
          >
            <img src="assets/desktop/qa1.png" alt="qa1" />
            <div className="absolute w-[256px] h-[36px] left-[90px] top-[12px] text-[24px] text-[#7600da]">
              可以每天都使用A醇嗎？
            </div>
          </div>
        </a>

        {/* QA2 */}
        <a href="/soulmate-with-medical-beauty" target="__blank">
          <div
            className="absolute w-[434px] h-[380px] left-[466px] top-[850px] z-10"
            data-aos="flip-right"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <img src="assets/desktop/qa2.png" alt="qa2" />
            <div className="absolute w-[288px] h-[36px] left-[64px] top-[12px] text-[24px] text-[#7600da]">
              做音波拉提應該注意什麼？
            </div>
          </div>
        </a>

        {/* QA3 */}
        <a href="/soulmate-with-diet" target="__blank">
          <div
            className="absolute w-[439px] h-[380px] left-[847px] top-[850px] z-10"
            data-aos="flip-right"
            data-aos-once="true"
            data-aos-delay="400"
          >
            <img src="assets/desktop/qa3.png" alt="qa3" />
            <div className="absolute w-[384px] h-[36px] left-[15px] top-[12px] text-[24px] text-[#7600da]">
              想減少碳水攝取可以怎麼規劃食譜？
            </div>
          </div>
        </a>

        <img
          src="assets/desktop/curve3.png"
          alt="curve3"
          className="absolute w-[480px] h-[424px] top-[858px]"
        />
      </div>

      {/* section3 */}
      <div className="w-[1366px] h-[1091px] relative overflow-x-clip mx-auto bg-[url('/assets/desktop/bg3.png')]">
        {/* icons */}
        <div>
          <img
            src="assets/desktop/eguider_icon.png"
            alt="eguider_icon"
            className="absolute h-[49px] w-[178px] left-[80px] top-[20px]"
          />
          <img
            src="assets/desktop/soulmate_icon.png"
            alt="soulmate_icon"
            className="absolute h-[26px] w-[146px] left-[284px] top-[32px]"
          />
        </div>

        {/* 影片 */}
        <div>
          <img
            src="assets/desktop/video_border.png"
            alt="video_border"
            className="absolute w-[691px] h-[368px] left-[595px] top-[96px]"
          />
          <img
            src="assets/desktop/video.png"
            alt="video"
            className="absolute w-[585px] h-[315px] left-[605px] top-[105px]"
          />
          <img
            src="assets/desktop/addnow.png"
            alt="addnow"
            className="absolute w-[444px] h-[152px] left-[595px] top-[20px]"
          />
        </div>

        {/* 點擊加入 */}
        <div>
          <img
            src="assets/desktop/soulmate_icon.png"
            alt="soulmate_icon"
            className="absolute h-[60px] w-[340px] left-[80px] top-[129px]"
          />
          <div className="absolute h-[59px] w-[423px] left-[80px] top-[209px] text-[40px] text-white">
            點擊
            <span className="text-[40px] text-[#00cde6]">加入</span>
            開始
          </div>
          <div className="absolute h-[59px] w-[423px] left-[80px] top-[268px] text-[40px] text-white">
            與<span className="text-[40px] text-[#00cde6]">Soulmate搜美</span>
            暢聊！
          </div>
        </div>

        {/* 立即加入 */}
        <a href="https://lin.ee/BAa3w9g" target="__blank">
          <img
            src="assets/desktop/join_button.svg"
            className="absolute h-[56px] w-[190px] left-[80px] top-[357px] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          />
        </a>
        <img
          src="assets/desktop/share_button.svg"
          className="absolute h-[56px] w-[190px] left-[290px] top-[357px] cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
          onClick={handleShare}
        />

        <div className="absolute h-[61px] w-[590px] left-[80px] top-[512px] text-[20px] text-white">
          自己美麗的旅程總有些問題難以討論， 有搜美陪伴後日子更精緻！
          <br />
          點分享將連結傳送給朋友， 邀請他一起加入搜美口袋顧問的行列！
        </div>

        {/* QRCODE */}
        <img
          src="assets/desktop/qrcode.png"
          alt="qrcode"
          className="absolute h-[452px] w-[476px] left-[80px] top-[637px]"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-once="true"
        />
        <div
          className="absolute h-[72px] w-[96px] left-[111px] top-[644px] text-center text-[#7600da] text-[24px]"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-once="true"
        >
          搜美 <br />
          口袋顧問
        </div>

        <div className="absolute h-[93px] w-[700px] left-[586px] top-[637px] text-[#00cde6] text-[20px]">
          如您對Soulmate搜美有任何建議，歡迎點選【聯絡我們】填寫意見欄位表，或是寄到soulmate@e-guider.com信箱，我們會儘速將您的意見或建議交付權責單位妥慎處理。
          謝謝您的建言與指教。
        </div>

        <a href="https://lin.ee/BAa3w9g" target="__blank">
          <img
            src="assets/desktop/contactus_button.svg"
            className="absolute h-[56px] w-[190px] left-[586px] top-[770px] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-once="true"
          />
        </a>

        <div className="absolute h-[187px] w-[700px] left-[586px] top-[849px] text-[#FFFFFF] text-[13px]">
          在使用
          Soulmate搜美前，請細閱以下聲明。使用本服務即表示您已閱讀、理解並同意以下條款：
          <br />
          1.本產品為虛擬技術僅供參考，提供的資訊可能因詢問方式
          而有所不同，無法取代專業人士。 <br />
          2.建議使用者自行評估內容、數據和資料的準確性及安全
          性，並加以核實。如需專業幫助，請聯繋醫師與諮詢師。 <br />
          3.我們尊重並保護您的隱私，並采取適當措施保護您的個人
          資料。然而，使用本服務時，您的對話記錄可能被用於改
          進AI技術和提高服務品質，如不同意此隱私政策，請勿使 用本產品。 <br />
          4.使用者不得使用或濫用內容、數據和資料替自己或別人進
          行診斷或治療；如使用中發現任何健康問題，應儘速向專 業醫生尋求協助。
          <br />
          感謝您支持Soulmate搜美，祝您使用愉快！
        </div>
      </div>
    </div>
  );
};

export default Home;
