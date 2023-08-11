import { useEffect } from "react";

const QA3 = () => {
  useEffect(() => {
    document.title = "Soulmate 搜美 - 飲控撇步";
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img
        src="assets/mobile/qa_title.png"
        alt="title"
        className="w-[375px] h-[348px]"
      />
      <div className="w-[375px] h-[991px] relative overflow-hidden bg-[url('/assets/mobile/qa_bg1.png')]">
        <img
          src="assets/mobile/qa3/03.svg"
          className="absolute w-[131px] h-[100px] left-[30px] top-[40px]"
        />
        <div className="absolute w-[48px] h-[65px] left-[72px] top-[58px] text-[24px] text-[#00cde6]">
          飲控撇步
        </div>

        <img
          src="assets/mobile/qa_curve1.png"
          alt="curve1"
          className="absolute w-[375px] h-[572px] top-[275px]"
        />
        <img
          src="assets/mobile/qa3/textfield1.svg"
          className="absolute w-[330px] h-[722px] left-[14px] top-[173px]"
        />
        <img
          src="assets/mobile/soulmate_icon_circle.png"
          alt="icon"
          className="absolute w-[58px] h-[58px] left-[30px] top-[148px]"
        />
        <img
          src="assets/mobile/qa3/machine.png"
          alt="machine"
          className="absolute w-[82px] h-[91px] left-[233px] top-[44px]"
        />
        <img
          src="assets/mobile/qa3/textfield2.svg"
          className="absolute w-[252px] h-[68px] left-[93px] top-[143px]"
        />
        <div className="absolute w-[210px] h-[54px] left-[124px] top-[150px] text-[16px] text-[#8700f0]">
          想減少碳水攝取可以怎麼
          <br />
          規劃食譜？
        </div>

        <div className="absolute w-[280px] h-[658px] left-[47.5px] top-[224px] text-[14px] text-[#8700f0]">
          以下是一些規劃食譜的建議：
          <br />
          1.蔬菜為主：將蔬菜放在食譜的核心位置，增加蔬菜的攝入量。可以製作豐富的蔬菜沙拉、炒蔬菜、烤蔬菜或蔬菜湯等。選擇低澱粉和低糖分的蔬菜，如菠菜、花椰菜、洋蔥、西蘭花等。
          <br />
          <br />
          2.健康蛋白質：選擇瘦肉、家禽、魚、豆類和豆腐等健康蛋白質來源。可以製作燒烤雞胸肉、烤魚、豆腐炒菜或豆類湯等。
          <br />
          <br />
          3.好油脂：使用健康的油脂，如橄欖油、亞麻籽油、牛油果油等，來調味食物或製作沙拉醬。避免使用含有反式脂肪酸的加工食品。
          <br />
          <br />
          4.低碳水代替：尋找低碳水化合物的代替品來替代高碳水食物。例如，使用花椰菜米或花椰菜餅替代白米飯，使用蔬菜或萵苣生菜片來包裹漢堡或三明治。
          <br />
          <br />
          5.健康零食：選擇低碳水化合物的健康零食，如堅果、種子、蔬菜棒配健康沙拉醬、乾果（適量）、烤海苔等。
          <br />
          <br />
          這些僅是一些基本的飲食建議，而每個人的需求和口味不同。最好根據個人健康狀況、喜好和目標來調整飲食計劃。建議諮詢營養師或醫生的意見，以確保你的飲食計劃是安全、均衡且適合你的需求。
        </div>
      </div>
      <div className="w-[375px] h-[1273px] relative overflow-hidden bg-[url('/assets/mobile/qa_bg2.png')]">
        <div className="absolute w-[286px] h-76px] left-[45px] top-[30px] text-[26px] text-white text-center">
          不確定該怎麼提問嗎？
          <br />
          <span className="text-[#00cde6]">嘗試這些句子來破冰吧！</span>
        </div>

        <img
          src="assets/mobile/qa1/textfield3.png"
          alt="textfield3"
          className="absolute w-[375px] h-[244px] top-[136px]"
        />

        <div className="absolute w-[180px] h-54px] left-[134px] top-[149px] text-[16px] text-[#8700f0]">
          皮膚很乾可以用什麼樣的保養品增強保濕呢？
        </div>
        <div className="absolute w-[160px] h-54px] left-[56px] top-[233px] text-[16px] text-[#8700f0]">
          使用保養品時有沒有正確的順序？
        </div>
        <div className="absolute w-[180px] h-54px] left-[134px] top-[305px] text-[16px] text-[#8700f0]">
          物理性防曬與化學性防曬有什麼不同？
        </div>

        <img
          src="assets/mobile/soulmate_icon.png"
          alt="soulmate_icon"
          className="absolute w-[148px] h-[26px] left-[30px] top-[437px]"
        />
        <div className="absolute w-[130px] h-38px] left-[188px] top-[431px] text-[26px] text-[#00cde6]">
          回覆的內容
        </div>
        <div className="absolute w-[227px] h-76px] left-[30px] top-[474px] text-[26px] text-white">
          不是你想要的資訊?
          <br />
          <span className="text-[#00cde6]">你可以⋯⋯</span>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[580px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            確認提問是否清晰
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用簡單、明確語句描述你的問題，Soulmate能更好理解並提供適當的答案。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[680px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[128px] h-[24px] left-[40px] text-[16px] text-white">
            重新描述問題
          </div>
          <div className="absolute w-[2px] h-[40px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[38px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            使用不同的詞彙或表達方式再次提出問題，讓Soulmate換個角度重新回覆。
          </div>
        </div>

        <div className="absolute w-[300px] h-[79px] left-[30px] top-[780px]">
          <img
            src="assets/mobile/arrow.svg"
            className="absolute w-[30px] h-[23px]"
          />
          <div className="absolute w-[144px] h-[24px] left-[40px] text-[16px] text-white">
            澄清並詳細解釋問題
          </div>
          <div className="absolute w-[2px] h-[60px] left-[15px] top-[33px] bg-white" />
          <img
            src="assets/mobile/check.svg"
            className="absolute w-[13px] h-[15px] left-[40px] top-[34px]"
          />
          <div className="absolute w-[256px] h-[57px] left-[59px] top-[34px] text-[#00cde6] text-[13px]">
            如果回答與你所需的資訊不符，可以澄清問題。你可以說「不是這個意思，我是問...」並詳細解釋你的問題。
          </div>
        </div>

        <img
          src="assets/mobile/qa1/think.png"
          alt="think"
          className="absolute w-[315px] h-[192px] left-[30px] top-[897px] z-10"
        />
        <img
          src="assets/mobile/qa1/textfield4.svg"
          className="absolute w-[344px] h-[168px] left-[16px] top-[1089px] z-10"
        />
        <div className="absolute w-[280px] h-[96px] left-[48px] top-[1123px] text-[16px] text-[#8700f0] z-10">
          Soulmate可能因問題複雜程度、表達方式、領域專業性等因素而影響回覆內容及正確性，使用時請注意其限制和適用範圍，也可來信回饋您的寶貴建議。
        </div>
        <img
          src="assets/mobile/qa_curve2.png"
          alt="curve2"
          className="absolute w-[375px] h-[301px] top-[972px] z-0"
        />
      </div>
    </div>
  );
};

export default QA3;
