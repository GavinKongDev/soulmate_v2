/// <reference types="vite-plugin-svgr/client" />
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { ReactComponent as Addfriend } from "../assets/addfriend_button.svg";
import { ReactComponent as WhiteArrowRight } from "../assets/arrow.svg";
import { ReactComponent as BlueArrowRight } from "../assets/arrow_blue.svg";
import { ReactComponent as Beta } from "../assets/beta.svg";
import { ReactComponent as Contact } from "../assets/contactus_button.svg";
import { ReactComponent as Join } from "../assets/join_button.svg";
import { ReactComponent as Ok } from "../assets/ok.svg";
import { ReactComponent as Share } from "../assets/share_button.svg";

const Home = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "SoulMate 搜美",
          text: "點擊加入開始與 Soulmate 搜美暢聊!",
          url: "https://demo.eguider.com.tw/",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      const copyText = "https://demo.eguider.com.tw/";
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
      <div className="w-[375px] h-[1660px] bg-home-bg1 relative overflow-x-clip">
        {/* icons */}
        <div>
          <img
            src="/assets/eguider_icon.png"
            alt="eguider_icon"
            className="absolute h-[34px] w-[125px] left-[60px] top-[40px]"
          />
          <img
            src="/assets/soulmate_icon.png"
            alt="soulmate_icon"
            className="absolute h-[18px] w-[100px] left-[210px] top-[48px]"
          />
        </div>
        {/* 好消息 */}
        <div data-aos="zoom-out" data-aos-once="true">
          <img
            src="/assets/goodnews.png"
            alt="goodnews"
            className="absolute h-[137px] w-[248px] left-[66px] top-[94px]"
          />
          <Beta className="absolute w-[84px] h-[75px] left-[241px] top-[194px]" />
        </div>
        {/* 搜美是你的私人口袋顧問 */}
        <div className="flex mx-auto mt-[50px] w-[320px] h-[120px]">
          <BlueArrowRight className="absolute w-[30px] h-[23px] left-[30px] top-[287px]" />
          <div className="absolute w-[249px] h-[76px] left-[70px] top-[279px] text-[26px] text-white">
            Soulmate搜美是你的 私人口袋顧問
          </div>
          <a href="https://lin.ee/BAa3w9g" target="__blank">
            <Addfriend
              className="absolute w-[137px] h-[40px] left-[70px] top-[365px] z-10 cursor-pointer"
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-once="true"
            />
          </a>
          <WhiteArrowRight
            className="absolute w-[30px] h-[23px] left-[227px] top-[373px]"
            data-aos="flip-left"
            data-aos-delay="700"
            data-aos-once="true"
          />
        </div>
        <img
          src="/assets/phone1.png"
          alt="phone1"
          className="absolute h-[448px] w-[375px] top-[307px] z-1"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="true"
        />
        {/* Soulmate搜美是什麼？ */}
        <div className="absolute w-[212px] h-[29px] left-[30px] top-[760px] text-[20px] text-white">
          Soulmate搜美是什麼？
        </div>
        <div className="absolute w-[315px] h-[240px] left-[30px] top-[799px] text-[16px] text-[#00cde6]">
          Soulmate搜美是一款AI對話軟體，它就像是你的專屬營養師、醫師、體重管理師……讓理想中的私人管家顧問，陪伴在你身邊，在任何時候，不需要不好意思、不擔心能不能問、更不用害羞去問一些難以啟齒的問題，比方：請計算安全期.....等，只要在對話框中輸入想問的內容，便能獲得專屬回覆！Soulmate搜美，是個能永遠陪伴在你身邊的、最Smart的專屬管家，當然永遠不會洩漏更多的私事給其他人：）
        </div>
        {/* Soulmate搜美跟Google搜尋 差別在哪裡？ */}
        <div className="absolute w-[259px] h-[29px] left-[30px] top-[1069px] text-[20px] text-white">
          Soulmate搜美跟Google搜尋 差別在哪裡？
        </div>
        <div className="absolute w-[315px] h-[96px] left-[30px] top-[1137px] text-[16px] text-[#00cde6]">
          Google搜尋可一次性給予數百筆結果，Soulmate搜美則能為你統整資訊！此外Soulmate搜美可接續前後文，他就是AI的最高展現。
        </div>
        {/* 四宮格 */}
        <div className="absolute w-[315px] h-[315px] left-[30px] top-[1263px]">
          <div
            className="absolute left-[0px] top-[0px] w-[148px] h-[148px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-down-right"
            data-aos-once="true"
          >
            <img
              src="/assets/block1.png"
              alt="block1"
              className="absolute w-[89px] h-[74px] left-[30px] top-[26px]"
            />
            <div className="absolute text-[16px] text-white left-[41px] top-[106px]">
              完全免費
            </div>
          </div>
          <div
            className="absolute left-[167px] top-[0px] w-[148px] h-[148px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-down-left"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img
              src="/assets/block2.png"
              alt="block2"
              className="absolute w-[103px] h-[79px] left-[22.5px] top-[26px]"
            />
            <div className="absolute text-[16px] text-white left-[41px] top-[106px]">
              客觀建議
            </div>
          </div>
          <div
            className="absolute left-[0px] top-[167px] w-[148px] h-[148px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-up-right"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img
              src="/assets/block3.png"
              alt="block3"
              className="absolute w-[77px] h-[76px] left-[35.5px] top-[26px]"
            />
            <div className="absolute text-[16px] text-white left-[41px] top-[106px]">
              私密對談
            </div>
          </div>
          <div
            className="absolute left-[167px] top-[167px] w-[148px] h-[148px] bg-[#8700f0] rounded-[20px] border-2 border-[#00cde6]"
            data-aos="fade-up-left"
            data-aos-delay="600"
          >
            <img
              src="/assets/block4.png"
              alt="block4"
              className="absolute w-[67px] h-[79px] left-[40.5px] top-[26px]"
            />
            <div className="absolute text-[16px] text-white left-[41px] top-[106px]">
              博學聰明
            </div>
          </div>
        </div>
      </div>
      <div className="w-[375px] h-[1872px] bg-home-bg2 relative overflow-x-clip">
        <img
          src="/assets/curve1.png"
          alt="curve1"
          className="absolute top-[-20px] z-10"
        />

        {/* 了解Soulmate搜美的 特色後，讓我們來看看 該如何使用！ */}
        <div>
          <WhiteArrowRight className="absolute w-[30px] h-[23px] left-[30px] top-[170px]" />
          <div className="absolute w-[260px] h-[76px] left-[30px] top-[203px] text-[26px] text-[#00cde6] leading-[38px]">
            了解Soulmate搜美的 特色後，讓我們來看看
          </div>
          <div className="absolute w-[260px] h-[38px] left-[30px] top-[281px] text-[26px] text-white leading-[38px]">
            該如何使用！
          </div>
        </div>

        {/* 分隔線 */}
        <div>
          <div className="absolute w-[244px] h-[2px] left-[30px] top-[337px] bg-white"></div>
          <div className="absolute w-[60px] h-[2px] left-[274px] top-[337px] bg-[#7600da]"></div>
        </div>

        {/* 發送問題 */}
        <img
          src="/assets/speaker.png"
          alt="speaker"
          className="absolute w-[218px] h-[83px] left-[30px] top-[359px]"
        />

        {/* soulmate icon */}
        <img
          src="/assets/soulmate_icon.png"
          alt="soulmate_icon"
          className="absolute w-[190px] h-[34px] left-[30px] top-[472px]"
        />

        {/* 對於該詢問哪些問題沒有想法？ 參考以下提問激發你的想像力！ */}
        <div className="absolute w-[280px] h-[58px] left-[30px] top-[526px] text-white text-[20px]">
          對於該詢問哪些問題沒有想法？ 參考以下提問激發你的想像力！
        </div>

        <img
          src="/assets/curve3.png"
          alt="curve3"
          className="absolute h-[316px] w-[88px] top-[672px]"
        />

        {/* QA1 */}
        <a href="/soulmate-with-daily-maintenance" target="__blank">
          <img
            src="/assets/qa1.png"
            alt="qa1"
            className="absolute w-[337px] h-[277px] left-[26px] top-[644px]"
            data-aos="fade-left"
            data-aos-once="true"
          />
        </a>

        {/* QA2 */}
        <a href="/soulmate-with-medical-beauty" target="__blank">
          <img
            src="/assets/qa2.png"
            alt="qa2"
            className="absolute w-[324px] h-[273px] left-[26px] top-[957px]"
            data-aos="fade-right"
            data-aos-once="true"
          />
        </a>

        {/* QA3 */}
        <a href="/soulmate-with-diet" target="__blank">
          <img
            src="/assets/qa3.png"
            alt="qa3"
            className="absolute w-[341px] h-[270px] left-[17px] top-[1274px]"
            data-aos="fade-left"
            data-aos-once="true"
          />
        </a>

        <img
          src="/assets/curve2.png"
          alt="curve2"
          className="absolute w-[375px] h-[283px] top-[1608px] z-10"
        />

        {/* 保養攻略、美妝技巧、醫美解密、保健指南、飲控撇步、身形管理⋯ ⋯ 跟美有關的大小事，通通都能問！ */}
        <div>
          <img
            src="/assets/qa4.png"
            alt="qa4"
            className="absolute w-[330px] h-[204px] left-[23px] top-[1584px] z-20"
          />
          <div className="absolute w-[167px] h-[120px] left-[156px] top-[1626px] text-[#7600da] z-20">
            保養攻略、美妝技巧、醫美解密、保健指南、飲控撇步、身形管理⋯ ⋯
            跟美有關的大小事，通通都能問！
          </div>
        </div>
      </div>
      <div className="w-[375px] h-[1868px] bg-home-bg3 relative overflow-x-clip">
        {/* 影片 */}
        <img
          src="/assets/video.png"
          alt="video"
          className="absolute w-[375px] h-[212px] top-[61px] anchor-3"
          data-aos-anchor-placement="bottom-center"
        />

        {/* addnow */}
        <img
          src="/assets/addnow.png"
          alt="addnow"
          className="absolute w-[154px] h-[122px] left-[30px] top-[313px]"
          data-aos="fade-down-right"
          data-aos-once="true"
          data-aos-anchor=".anchor-3"
          data-aos-delay="200"
        />

        <Ok
          className="absolute w-[53px] h-[60px] left-[236px] top-[404px]"
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-anchor=".anchor-3"
        />

        <img
          src="/assets/soulmate_icon.png"
          alt="soulmate_icon"
          className="absolute h-[26px] w-[148px] left-[30px] top-[470px]"
        />

        <div className="absolute h-[38px] w-[156px] left-[189px] top-[465px] text-[26px] text-white leading-[38px]">
          點擊
          <span className="text-[26px] text-[#00cde6] leading-[38px]">
            加入
          </span>
          開始
        </div>
        <div className="absolute h-[38px] w-[275px] left-[30px] top-[503px] text-[26px] text-white leading-[38px]">
          與
          <span className="text-[26px] text-[#00cde6] leading-[38px]">
            Soulmate搜美
          </span>
          暢聊！
        </div>

        <div
          className="absolute h-[117px] w-[306px] left-[30px] top-[551px] text-[18px] text-white anchor-1"
          data-aos-anchor-placement="bottom-center"
        >
          自己美麗的旅程總有些問題難以討論， 有搜美陪伴後日子更精緻！
          <br />
          點分享將連結傳送給朋友，
          <br />
          邀請他一起加入搜美口袋顧問的行列！
        </div>

        {/* 立即加入 */}
        <a href="https://lin.ee/BAa3w9g" target="__blank">
          <Join
            className="absolute h-[40px] w-[135px] left-[30px] top-[688px] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-anchor=".anchor-1"
          />
        </a>
        <Share
          className="absolute h-[40px] w-[135px] left-[185px] top-[688px] cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
          data-aos-anchor=".anchor-1"
          onClick={handleShare}
        />

        {/* QRCODE */}
        <img
          src="/assets/qrcode.png"
          alt="qrcode"
          className="absolute h-[579px] w-[375px] top-[758px]"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-once="true"
        />
        <div
          className="absolute h-[54px] w-[72px] left-[221px] top-[824px] text-center text-[#7600da] text-[18px]"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-once="true"
        >
          搜美 <br />
          口袋顧問
        </div>

        <div
          className="absolute h-[95px] w-[315px] left-[30px] top-[1297px] text-[#00cde6] text-[13px] anchor-2"
          data-aos-anchor-placement="bottom-center"
        >
          如您對Soulmate搜美有任何 <br />
          建議，歡迎點選【聯絡我們】填寫意見欄位表，或是寄到soulmate@e-guider.com信箱，我們會儘速將您的意見或建議交付權責單位妥慎處理。
          謝謝您的建言與指教。
        </div>

        <a href="https://lin.ee/BAa3w9g" target="__blank">
          {" "}
          <Contact
            className="absolute h-[40px] w-[135px] left-[30px] top-[1412px] cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-anchor=".anchor-2"
          />
        </a>

        <div className="absolute h-[252px] w-[315px] left-[30px] top-[1472px] text-[#FFFFFF] text-[12px]">
          在使用
          Soulmate搜美前，請細閱以下聲明。使用本服務即表示您已閱讀、理解並同意以下條款：
          1.本產品為虛擬技術僅供參考，提供的資訊可能因詢問方式
          而有所不同，無法取代專業人士。
          2.建議使用者自行評估內容、數據和資料的準確性及安全
          性，並加以核實。如需專業幫助，請聯繋醫師與諮詢師。
          3.我們尊重並保護您的隱私，並采取適當措施保護您的個人
          資料。然而，使用本服務時，您的對話記錄可能被用於改
          進AI技術和提高服務品質，如不同意此隱私政策，請勿使 用本產品。
          4.使用者不得使用或濫用內容、數據和資料替自己或別人進
          行診斷或治療；如使用中發現任何健康問題，應儘速向專 業醫生尋求協助。
          感謝您支持Soulmate搜美，祝您使用愉快！
        </div>

        <div>
          <img
            src="/assets/eguider_icon.png"
            alt="eguider_icon"
            className="absolute h-[34px] w-[125px] left-[60px] top-[1795px]"
          />
          <img
            src="/assets/soulmate_icon.png"
            alt="soulmate_icon"
            className="absolute h-[18px] w-[100px] left-[210px] top-[1803px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
