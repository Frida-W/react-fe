import type { SVGProps } from 'react';

export const WechatIcon = ({
  withText = false,
  ...props
}: { withText?: boolean } & JSX.IntrinsicAttributes &
  SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox={withText ? '0 0 1122 331' : '0 0 400 400'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-183.000000, -354.000000)">
          <g transform="translate(183.000000, 354.000000)">
            {withText && (
              <path
                d="M1072.1533,237.2128 L1086.1533,274.9858 C1087.6063,279.2128 1089.1913,284.2308 1090.2483,288.0618 L1090.5123,288.0618 C1091.7013,284.2308 1093.0213,279.3448 1094.6063,274.7198 L1107.2853,237.2128 L1119.5683,237.2128 L1102.1333,282.7768 C1093.8143,304.7028 1088.1343,315.9288 1080.2113,322.7958 C1075.8343,326.6638 1071.4583,328.7288 1068.3513,329.7138 C1067.3993,328.0048 1063.0413,320.5508 1063.0413,320.5508 C1065.9463,319.6278 1069.7763,317.7778 1073.2103,314.8738 C1076.3803,312.3618 1080.3423,307.8718 1082.9833,301.9278 C1083.5123,300.7408 1083.9083,299.8148 1083.9083,299.1548 C1083.9083,298.4958 1083.6443,297.5688 1083.1153,296.1188 L1059.4743,237.2128 L1072.1533,237.2128 Z M804.4798,235.7585 C824.0258,235.7585 828.7818,249.0975 828.7818,261.9095 L828.7818,285.8165 C828.7818,291.3615 829.0448,296.7785 829.8378,301.1365 L819.2718,301.1365 L818.3468,293.0785 L817.9498,293.0785 C814.3838,298.0995 807.5168,302.5895 798.4038,302.5895 C785.4598,302.5895 778.8558,293.4745 778.8558,284.2305 C778.8558,268.7795 792.5908,260.3265 817.2898,260.4575 L817.2898,259.1355 C817.2898,253.8545 815.8368,244.3435 802.7618,244.3435 C797.3838,244.3435 791.7908,245.8575 787.4478,248.2975 C786.3638,246.4355 783.4788,241.4395 783.4788,241.4395 C788.7618,238.0035 796.4218,235.7585 804.4798,235.7585 Z M1021.9748,235.7585 C1041.5208,235.7585 1046.2768,249.0975 1046.2768,261.9095 L1046.2768,285.8165 C1046.2768,291.3615 1046.5398,296.7785 1047.3328,301.1365 L1036.7668,301.1365 L1035.8428,293.0785 L1035.4458,293.0785 C1031.8798,298.0995 1025.0128,302.5895 1015.8988,302.5895 C1002.9558,302.5895 996.3508,293.4745 996.3508,284.2305 C996.3508,268.7795 1010.0868,260.3265 1034.7858,260.4575 L1034.7858,259.1355 C1034.7858,253.8545 1033.3318,244.3435 1020.2568,244.3435 C1014.8788,244.3435 1009.2858,245.8575 1004.9438,248.2975 C1003.8588,246.4355 1000.9748,241.4395 1000.9748,241.4395 C1006.2578,238.0035 1013.9168,235.7585 1021.9748,235.7585 Z M667.6739,210.6643 C678.7689,210.6643 685.7699,213.0413 688.8059,214.6273 C688.8059,214.6273 685.2959,220.7313 683.8579,223.0563 C679.7059,221.4363 674.3119,220.3073 668.0699,220.3073 C647.2019,220.3073 633.3349,233.6453 633.3349,257.0233 C633.3349,278.8143 645.8819,292.8153 667.5419,292.8153 C673.4529,292.8153 679.4589,291.7783 683.9679,290.1043 C685.0149,291.9303 688.6739,298.2313 688.6739,298.2313 C684.4469,300.3443 675.9939,302.4583 665.1649,302.4583 C640.0699,302.4583 621.1839,286.6073 621.1839,257.4183 C621.1839,229.5513 640.0699,210.6643 667.6739,210.6643 Z M581.3101,235.7587 C602.1781,235.7587 607.7251,254.1177 607.7251,265.8707 C607.7251,268.2477 607.4611,270.0977 607.3291,271.2877 L562.4221,271.2877 C562.6871,287.0037 572.7251,293.4747 584.3481,293.4747 C591.2021,293.4747 595.8161,292.4897 599.6671,291.1097 C600.7341,292.8687 604.0271,298.4957 604.0271,298.4957 C599.9331,300.3447 592.9321,302.4577 582.7621,302.4577 C563.0831,302.4577 551.3291,289.5157 551.3291,270.2297 C551.3291,250.9467 562.6871,235.7587 581.3101,235.7587 Z M864.959,218.8534 L864.959,237.2124 L881.601,237.2124 L881.601,246.0614 L864.959,246.0614 L864.959,280.5324 C864.959,288.4574 867.205,292.9474 873.677,292.9474 C874.627,292.9474 875.5,292.9084 876.296,292.8424 C877.66,295.1384 880.939,300.8734 880.939,300.8734 C878.694,301.7954 875.129,302.4574 870.639,302.4574 C865.224,302.4574 860.866,300.7414 858.092,297.5694 C854.79,294.1374 853.602,288.4574 853.602,280.9274 L853.602,246.0614 L843.695,246.0614 L843.695,237.2124 L853.602,237.2124 L853.602,218.8534 L864.959,218.8534 Z M953.0387,211.4585 C964.3977,211.4585 972.7187,214.0995 978.0017,218.8535 C982.8897,223.0795 985.7937,229.5515 985.7937,237.4765 C985.7937,245.5345 983.4167,251.8725 978.9267,256.4955 C972.8507,262.9665 962.9457,266.2675 951.7187,266.2675 C948.2847,266.2675 945.1157,266.1345 942.4727,265.4755 L942.4727,301.1365 L930.9827,301.1365 L930.9827,213.1735 C936.5307,212.2495 943.7947,211.4585 953.0387,211.4585 Z M449.1173,212.1176 L459.6833,257.1556 C462.3253,268.2476 464.7023,279.3446 466.2883,287.9296 L466.5513,287.9296 C468.0043,279.0806 470.7783,268.5156 473.8163,257.0236 L485.7023,212.1176 L497.7203,212.1176 L508.5513,257.2866 C511.0603,267.8526 513.4383,278.4186 514.7583,287.7976 L515.0233,287.7976 C516.8713,278.0236 519.3823,268.1156 522.1563,257.0236 L533.9103,212.1176 L545.6643,212.1176 L520.4383,301.1366 L508.4183,301.1366 L497.1933,254.7786 C494.4193,243.4206 492.5713,234.7036 491.3813,225.7206 L491.1173,225.7206 C489.5333,234.5726 487.5513,243.2886 484.2503,254.7786 L471.5713,301.1366 L459.5513,301.1366 L436.9673,212.1176 L449.1173,212.1176 Z M718.2471,207.3641 L718.2471,247.2511 L718.5111,247.2511 C720.3601,243.9481 723.2661,241.0441 726.8311,239.0621 C730.2671,237.0811 734.3591,235.7591 738.7201,235.7591 C747.3041,235.7591 761.0401,241.0441 761.0401,263.0981 L761.0401,301.1361 L749.4171,301.1361 L749.4171,264.4211 C749.4171,254.1181 745.5871,245.4011 734.6251,245.4011 C727.0951,245.4011 721.1521,250.6831 719.0391,257.0231 C718.3791,258.6081 718.2471,260.3261 718.2471,262.5711 L718.2471,301.1361 L706.6241,301.1361 L706.6241,207.3641 L718.2471,207.3641 Z M790.4788,282.9095 C790.4788,290.4385 795.4968,294.0055 801.4418,294.0055 C809.7618,294.0055 815.0448,288.7205 816.8928,283.3075 C817.2898,282.1175 817.5538,280.7955 817.5538,279.6085 L817.5538,268.5155 C804.8748,268.2475 790.4788,270.4935 790.4788,282.9095 Z M1007.9738,282.9095 C1007.9738,290.4385 1012.9928,294.0055 1018.9368,294.0055 C1027.2578,294.0055 1032.5408,288.7205 1034.3888,283.3075 C1034.7858,282.1175 1035.0498,280.7955 1035.0498,279.6085 L1035.0498,268.5155 C1022.3698,268.2475 1007.9738,270.4935 1007.9738,282.9095 Z M580.3851,244.0797 C568.6301,244.0797 563.4791,254.9097 562.5541,262.9667 L596.4991,262.9667 C596.6311,255.5697 593.4611,244.0797 580.3851,244.0797 Z M953.3047,220.5715 C948.2847,220.5715 944.4537,220.9665 942.4727,221.4945 L942.4727,256.0995 C944.9837,256.7585 948.1537,257.0235 951.9827,257.0235 C965.8517,257.0235 974.3047,250.2875 974.3047,238.0035 C974.3047,226.2505 965.9837,220.5715 953.3047,220.5715 Z M875.0926,19.8839 L875.0926,43.2729 L944.2626,43.2729 L944.2626,55.4239 L875.0926,55.4239 L875.0926,80.8179 L930.9236,80.8179 C930.9236,80.8179 923.7576,117.3029 881.9136,148.0219 C898.8406,156.9379 921.1416,163.2529 948.3316,167.5089 C948.3316,167.5089 943.9226,175.3289 940.1656,181.3769 C910.4276,176.2079 887.1836,167.1439 868.9766,156.5249 C850.6336,167.4119 826.8986,176.8929 796.2176,182.2329 C794.0786,179.0809 788.2626,168.7589 788.2626,168.7589 C816.0716,164.4079 838.9776,157.3689 856.0806,148.1869 C814.0266,118.0269 805.9336,80.8179 805.9336,80.8179 L805.9336,80.8179 L861.6046,80.8179 L861.6046,55.4239 L789.7616,55.4239 L789.7616,43.2729 L861.6046,43.2729 L861.6046,19.8839 L875.0926,19.8839 Z M465.336,64.5745 L476.12,70.3015 C471.003,82.4815 466.225,90.7685 464.919,93.3705 L464.919,181.7245 L452.768,181.7245 L452.768,112.4515 C445.816,121.7825 441.734,126.6675 439.7,128.9715 C438.27,126.4925 432.855,117.1135 432.855,117.1135 C445.902,103.3355 457.402,84.4115 465.336,64.5745 Z M999.8895,20.3705 L1014.0565,23.5185 L1013.6175,24.6705 C1007.8795,39.6675 1002.5085,52.4345 997.6495,62.6195 L997.6495,181.7245 L984.1615,181.7245 L984.1615,88.2655 C979.5235,95.8465 974.1285,103.5955 968.0705,111.3835 L960.5975,98.3535 C976.4865,76.7355 989.8575,50.4595 999.5865,21.2795 L999.8895,20.3705 Z M645.1584,20.3385 L657.9304,23.5305 C657.9304,23.5305 649.7974,49.1555 643.5784,62.6345 L643.6094,181.7245 L630.1214,181.7245 L630.1214,88.7455 C624.7174,98.9285 621.0974,105.6175 616.5124,111.6085 L609.2124,98.9635 C628.1324,75.0765 645.1584,20.3385 645.1584,20.3385 Z M559.2697,19.6995 L571.4207,22.1325 L571.1367,23.2225 C568.6327,32.8245 565.8617,42.2585 562.8907,51.2915 L562.8907,51.2915 L599.2377,51.2915 L599.2377,62.7755 L590.4807,62.7755 C588.2177,95.3905 582.4467,120.6525 573.3227,137.8835 C580.5587,151.9695 594.5167,165.1805 598.4517,168.7485 C597.5697,170.4225 591.4957,180.8305 591.4957,180.8305 C591.4957,180.8305 571.2957,160.1395 566.7207,150.1315 C561.5837,158.7635 552.0997,169.9555 539.2437,181.4295 L539.2437,181.4295 L532.7017,170.0115 C532.7017,170.0115 550.2867,155.4185 560.2457,137.8125 C554.0477,121.9825 549.9347,104.9925 548.0057,87.2455 C545.8787,90.9975 544.7137,93.0115 542.5747,96.2205 C542.5747,96.2205 536.9007,86.3595 535.7487,84.5155 C545.9467,66.5735 553.5987,45.4345 559.0447,20.7195 L559.0447,20.7195 L559.2697,19.6995 Z M1098.535,21.0769 L1098.535,59.3105 L1121.945,59.311 L1121.945,72.131 L1098.535,72.1305 L1098.535,155.3809 C1098.535,168.6319 1087.754,179.4149 1074.501,179.4149 L1058.785,179.4149 L1058.785,165.3749 L1074.501,165.3749 C1080.013,165.3749 1084.499,160.8909 1084.499,155.3809 L1084.499,72.1305 L1009.555,72.131 L1009.555,59.311 L1084.499,59.3105 L1084.499,21.0769 L1098.535,21.0769 Z M762.558,122.795 L762.558,178.723 L667.543,178.723 L667.543,122.795 L762.558,122.795 Z M529.0715,116.1126 L529.0715,146.9956 C531.3385,145.0726 538.3005,138.9516 540.6385,136.8706 L546.2325,146.5606 L520.5895,168.2066 C520.5895,168.2066 515.1655,158.8406 514.0705,157.0676 C515.5795,155.3936 517.5905,151.9236 517.5905,145.3156 L517.5875,127.5956 L494.3225,127.5956 C494.3225,154.0126 493.2625,163.5786 475.6405,177.3526 C475.6405,177.3526 471.3885,169.8556 469.5025,166.7206 C484.6345,154.7626 482.8385,138.4256 482.8385,116.1126 L529.0715,116.1126 Z M749.738,134.946 L681.031,134.946 L681.031,167.239 L749.738,167.239 L749.738,134.946 Z M912.0406,92.7919 L825.1866,92.7919 C830.1576,103.1339 842.4786,123.1049 869.0266,140.4639 C895.4516,122.8259 907.3976,102.7299 912.0406,92.7919 L912.0406,92.7919 Z M1036.893,91.9621 L1061.359,130.8501 L1048.582,137.8231 L1025.633,98.6251 L1036.893,91.9621 Z M578.9967,62.7755 L559.0037,62.7755 C558.8027,63.5835 556.9117,68.3265 556.4947,69.2465 C558.9827,93.1655 562.6697,111.4965 567.4647,123.7975 C573.4047,109.5405 577.2827,89.0365 578.9967,62.7755 L578.9967,62.7755 Z M763.895,96.065 L763.895,107.548 L666.207,107.548 L666.207,96.065 L763.895,96.065 Z M535.086,90.05 L535.086,101.533 L480.167,101.533 L480.167,90.05 L535.086,90.05 Z M763.895,69.335 L763.895,80.818 L666.207,80.818 L666.207,69.335 L763.895,69.335 Z M514.3698,22.5571 L514.3698,64.6571 L526.7788,64.6571 L526.7788,34.5851 L537.5938,34.5851 L537.5938,75.4721 L479.0068,75.4721 L479.0068,35.2541 L490.4898,35.2541 L490.4898,64.6571 L502.8858,64.6571 L502.8858,22.5571 L514.3698,22.5571 Z M465.9679,19.7648 L476.5679,26.7078 C468.5349,43.6748 456.0279,61.2068 441.3849,74.5898 L434.9849,63.5048 C446.6019,52.2968 457.5949,36.5118 465.9679,19.7648 Z M714.9828,20.3387 L724.515,41.9365 L773.25,41.937 L773.25,54.088 L657.52,54.088 L657.52,41.937 L710.991,41.9365 L704.0528,25.0907 L714.9828,20.3387 Z"
                fill="#ffffff"
              ></path>
            )}
            <path
              d="M136.3106,209.1757 C134.6186,210.0287 132.7146,210.5227 130.6896,210.5227 C126.0036,210.5227 121.9326,207.9457 119.7906,204.1297 L118.9726,202.3377 L84.8556,127.4737 C84.4876,126.6577 84.2596,125.7377 84.2596,124.8407 C84.2596,121.3917 87.0566,118.5947 90.5066,118.5947 C91.9076,118.5947 93.2016,119.0607 94.2426,119.8347 L134.5036,148.4997 C137.4446,150.4237 140.9586,151.5527 144.7386,151.5527 C146.9926,151.5527 149.1426,151.1307 151.1446,150.4037 L340.4756,66.1377 C306.5386,26.1397 250.6466,0.0007 187.3966,0.0007 C83.8966,0.0007 -0.0004,69.9177 -0.0004,156.1707 C-0.0004,203.2247 25.2416,245.5827 64.7496,274.2127 C67.9196,276.4757 69.9946,280.1937 69.9946,284.3897 C69.9946,285.7767 69.6986,287.0447 69.3356,288.3677 C66.1796,300.1387 61.1306,318.9887 60.8936,319.8707 C60.5006,321.3497 59.8856,322.8907 59.8856,324.4367 C59.8856,327.8867 62.6816,330.6817 66.1366,330.6817 C67.4886,330.6817 68.5986,330.1787 69.7416,329.5197 L110.7676,305.8337 C113.8546,304.0537 117.1206,302.9487 120.7216,302.9487 C122.6366,302.9487 124.4866,303.2447 126.2266,303.7777 C145.3676,309.2817 166.0156,312.3407 187.3966,312.3407 C290.8926,312.3407 374.8006,242.4187 374.8006,156.1707 C374.8006,130.0457 367.0596,105.4437 353.4536,83.8007 L137.6776,208.3857 L136.3106,209.1757 Z"
              fill="#1AAD19"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};