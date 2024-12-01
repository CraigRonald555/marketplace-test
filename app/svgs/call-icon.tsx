import * as React from "react";
const CallIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <symbol id="icn-call" viewBox="0 0 24 24">
      <path d="M5.26753415,2 C5.8440269,2 6.39216755,2.23991935 6.85052654,2.69153226 C7.15767432,2.97379032 7.4553714,3.27486559 7.73889242,3.56653226 C7.88065293,3.71706989 8.03186415,3.86760753 8.17835001,4.01344086 L8.17835001,4.01344086 L9.46837068,5.29771505 C10.4606943,6.28561828 10.4606943,7.56518817 9.46837068,8.5530914 C9.33606086,8.68481183 9.20375105,8.82123656 9.07144124,8.95295699 C8.72176531,9.30577957 8.36263868,9.67271505 7.97515994,10.0255376 C8.26340632,10.6606183 8.66033575,11.2862903 9.25100456,12.0295699 C10.470145,13.5208333 11.7412642,14.6733871 13.139968,15.5577957 C13.2770031,15.6424731 13.437665,15.7224462 13.6077776,15.8071237 C13.7259114,15.8682796 13.8487705,15.9294355 13.9716296,15.9952957 L13.9716296,15.9952957 L15.4648404,14.5134409 C15.9421008,14.0383065 16.4996921,13.7889785 17.0809102,13.7889785 C17.6668537,13.7889785 18.2197197,14.0430108 18.6780787,14.5181452 L18.6780787,14.5181452 L21.272296,17.1102151 C21.7495564,17.5806452 22,18.140457 22,18.7237903 C22,19.3024194 21.7542818,19.8669355 21.2864721,20.3514785 C21.083282,20.563172 20.8753666,20.765457 20.6721765,20.9583333 C20.3744795,21.2452957 20.0909584,21.5134409 19.8452402,21.8098118 C19.8405149,21.8192204 19.8310642,21.8239247 19.8263388,21.8333333 C19.1080855,22.609543 18.1913676,23 17.0998116,23 C17.0053046,23 16.9013469,22.9952957 16.8021145,22.9905914 C15.1813193,22.8870968 13.7306368,22.2802419 12.6438062,21.7674731 C9.79914521,20.3985215 7.30888553,18.4556452 5.23918205,15.9952957 C3.53333054,13.953629 2.38979574,12.0483871 1.62428897,9.99260753 C1.31241584,9.15524194 0.906035708,7.87567204 1.01944412,6.50201613 C1.09504972,5.65053763 1.44000031,4.91666667 2.04484516,4.31451613 L2.04484516,4.31451613 L3.6514643,2.70094086 C3.65618965,2.69623656 3.65618965,2.69623656 3.660915,2.69153226 C4.13345005,2.23991935 4.6910414,2 5.26753415,2 Z M5.27698485,3.27016129 C5.03599198,3.27016129 4.79027376,3.38776882 4.55873159,3.60416667 L4.55873159,3.60416667 L2.94738709,5.20833333 C2.55518301,5.59879032 2.34254224,6.05510753 2.29528873,6.60551075 C2.22440848,7.46639785 2.38507039,8.37903226 2.82452798,9.55040323 C3.53805589,11.4697581 4.61543579,13.2573925 6.22678029,15.1908602 C8.17835001,17.5100806 10.5268492,19.3400538 13.2013975,20.6290323 C14.179545,21.0947581 15.4837418,21.640457 16.8871708,21.7298387 C16.9580511,21.734543 17.0336567,21.734543 17.104537,21.734543 C17.8416916,21.734543 18.4040083,21.4946237 18.8812687,20.9865591 C19.1742404,20.6431452 19.4861136,20.3373656 19.7932614,20.0456989 C19.9964514,19.8481183 20.1854654,19.6693548 20.3697541,19.4717742 L20.3697541,19.4717742 L20.4597234,19.3721085 C20.8495767,18.9073208 20.8192924,18.4471774 20.3650288,17.999328 L20.3650288,17.999328 L17.7613607,15.4072581 L17.7613607,15.4072581 L17.75191,15.3978495 C17.6054241,15.2379032 17.3644312,15.0544355 17.0714595,15.0544355 C16.7737624,15.0544355 16.5185935,15.2473118 16.3579316,15.4072581 L16.3579316,15.4072581 L14.7418617,17.016129 C14.6615308,17.0961022 14.4158126,17.3407258 14.0236085,17.3407258 C13.8676719,17.3407258 13.7164607,17.3030914 13.5557988,17.2231183 C13.5368974,17.2137097 13.517996,17.1995968 13.4990946,17.1901882 C13.3620594,17.1055108 13.2013975,17.0255376 13.0312849,16.9408602 C12.8422709,16.8467742 12.6438062,16.7479839 12.4500668,16.625672 C10.9332293,15.6706989 9.55815233,14.4240591 8.25395562,12.8245968 L8.25395562,12.8245968 C7.530977,11.9119624 7.05844196,11.1498656 6.72294208,10.3407258 L6.72294208,10.3407258 L6.70876603,10.2983871 C6.62370972,10.0302419 6.54810411,9.63508065 6.95448425,9.23051075 C6.9592096,9.22110215 6.9686603,9.21639785 6.978111,9.20698925 C7.38921649,8.84005376 7.76724452,8.46370968 8.16417396,8.05913978 C8.30120912,7.92741935 8.43351893,7.79099462 8.5705541,7.65456989 C9.07144124,7.15591398 9.07144124,6.69489247 8.5705541,6.19623656 L8.5705541,6.19623656 L7.28053343,4.91196237 C7.12932222,4.75672043 6.978111,4.6061828 6.83162514,4.45564516 C6.54337876,4.15927419 6.26930844,3.88172043 5.98106206,3.61357527 C5.97633671,3.60887097 5.97161136,3.60416667 5.96688601,3.59946237 C5.8156748,3.44892473 5.57468193,3.27016129 5.27698485,3.27016129 Z M12.6770081,5.00009437 L12.775148,5.00886089 C14.3291472,5.27360249 15.7458847,6.0089958 16.8684899,7.13169626 C17.991095,8.25439672 18.7264259,9.67125451 18.991145,11.2253857 C19.0499714,11.5881797 18.8097634,11.9313633 18.4470001,11.9901948 C18.4077825,11.9950974 18.373467,12 18.3342494,12 C18.015606,12 17.7361803,11.7744794 17.682256,11.4509063 C17.4616568,10.1664193 16.8586854,8.99959528 15.9272663,8.06809708 C14.9958472,7.13659888 13.8291222,6.52867374 12.5447443,6.31295837 C12.1819811,6.25412691 11.9466752,5.90604074 12.0104039,5.54814932 C12.0741326,5.19025791 12.4123848,4.95002943 12.775148,5.00886089 Z M13.6011859,1.00003628 L13.6978896,1.00916338 C16.0211272,1.40541314 18.1351844,2.50066528 19.8175288,4.1836137 C21.4998733,5.86656211 22.5947324,7.98137824 22.9908399,10.3054499 C23.0486983,10.6304637 22.826166,10.9421208 22.5012688,10.9910955 C22.4656636,10.9955478 22.4345091,11 22.3989039,11 C22.1096119,11 21.855925,10.7951968 21.8069679,10.5013486 C21.4553668,8.42660269 20.4762245,6.53439878 18.9719059,5.02954015 C17.4675874,3.52913376 15.5760625,2.54518773 13.5020611,2.19346041 C13.1727133,2.13558123 12.9546316,1.82837636 13.0080394,1.49891027 C13.0658978,1.17389642 13.3729924,0.9512842 13.6978896,1.00916338 Z" />
    </symbol>
    <use href="#icn-call" />
  </svg>
);
export default CallIcon;