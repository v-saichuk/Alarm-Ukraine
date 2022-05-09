import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';

import { Poltavskiy, PoltavskiyName } from './District/Poltavskiy';
import { Kremenchuksky, KremenchukskyName } from './District/Kremenchuksky';
import { Lubensky, LubenskyName } from './District/Lubensky';
import { Mirgorodsky, MirgorodskyName } from './District/Mirgorodsky';
import {
    BLUE,
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
} from '../../../../variables';
import { Mines } from '../../../Mines/Mines';
import { useMinesInfo } from '../../../../hooks/useMinesInfo';

export const Poltava = () => {
    const regionPoltava = useSelectRegion('Полтавська область');
    const regionPoltavskiy = useSelectRegion('Полтавська область', 'Полтавський район');
    const regionMirgorodsky = useSelectRegion('Полтавська область', 'Миргородський район');
    const regionKremenchuksky = useSelectRegion('Полтавська область', 'Кременчуцький район');
    const regionLubensky = useSelectRegion('Полтавська область', 'Лубенський район');
    const { day, total } = useMinesInfo('Полтавська');
    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionPoltava)}
                stroke={DISTRICT_STROKE}
                strokeWidth={DISTRICT_STROKE_WIDTH}
                fillOpacity="1">
                <Poltavskiy color={useDistrictColor(regionPoltavskiy)} />
                <Kremenchuksky color={useDistrictColor(regionKremenchuksky)} />
                <Lubensky color={useDistrictColor(regionLubensky)} />
                <Mirgorodsky color={useDistrictColor(regionMirgorodsky)} />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m3039.6 1537.5-.2093.5807-1.0462.032-1.3038-1.2419-.8854-.5483-1.5936-.5807-.6117.3548v2.0645l-.2413.5645-3.0101.5806-.66.7258-1.352.5807-1.2716-.3064-1.1429-2.4677-1.0141-.4678-.2737-.7741 1.835-1.7581-.081-.5806-2.6881-3.1774-.7566-.4032-4.7002 1.0161-.9979-.016-1.2394-.758-.5474-.7902-.1931-.7742.5473-2.4195.032-2.3709-.2576-.9192-1.4808-2.9033.064-.4838 1.819-1.8225.048-.742-.5474-1.3387-2.2534-2.8871-1.2072-1.8386-2.7525-5.0806-.7566-1.0001-2.0121-1.4514-.8047-1.613-.016-2.0645.499-1.0161-5.006-4.1935-2.7525.5324-4.6841-1.4517-1.2877-.242-2.1248.7742-1.1428.2904-1.4648.1773-1.835-.9031-2.2856.6936-.6922-.081-1.1428-.9033-.8371-1.016-.5955-1.9839-.5312-.8548-1.2555-1.2581-1.2235-.9194-1.4807-.2257-1.2233.081-1.2716.4031-.4348-.097-1.5773-1.258-1.4326-1.7741-.3863-2.3548.4668-1.8711 1.0623-2.1288.064-1.9516-.5795-2.7581-.7243-1.129-2.2374-.3872-1.497.065-2.4949.7903-1.2877 1.129-2.9458 1.5323-1.4004.2581-.5955.7902-1.9477.048-7.1146-1.016-2.8973.064-2.3983-.871-2.0765-2.4516-2.157-1.0967-1.8511-.7258-1.4809-1.0001-1.5129-.6935-1.5454-.1129-1.497.8548-1.1911.097-1.3682-.1613-.8852-.4516-1.143-.242-1.835.2904-.7565.7904-1.3842 1.7418-1.159.8549-1.2878.5322-1.5934.3064-2.7043.081-1.2394.2742-2.012 1.4355-.821.3064-.853-.3225-.5474-.7581-.3702-.9517.2093-1.645-.837-.7097-1.497-.016-2.8973-3.3549-1.175-.629-2.9297-.065-2.1248-1.5-.4506-.081-6.664 1.0483-1.3841-.2581-.8049.016-.7727.3227-.9818 1.3548-1.0302.6613-1.3522.6451-1.1428.2419h-.9497l-1.5774-.8709-1.3038-1.3709-.5473-1.0001-1.2394-1.3226-1.0141-.5645-1.9638-.048-1.3038.5163-2.4467 2.2741-1.1428-.1614-.4025-.4677-.5955-1.4516-1.175-5.1128-.3863-1.2742-.5151-.629-3.2514-1.3871-.2737.016-2.157-.8387-1.4164-.258-.7565-.4515-1.2556-1.1614-2.9457-2.5161-5.1831-3.8225-1.4646-.7258-3.0424-.6452-1.3038-.5645-2.7845-1.7257-8.499-7.1935 1.2072-2.7258.8852-.7096 1.2074-1.2742-.4347-.6452-1.175.4034-1.4004.1452-1.6579-.5968-.3864-1.4355.1288-.7741.515-.9032 3.7667-2.7258.2575-1.1935.016-2.258.2737-.8871 2.5271-3.371.2093-1.0161 1.4647-3.5435.1288-4.0483.4506-.9032.4992-.4629 1.3841-.35.8854-.6548.1449-1.4516.8209-1.0194.8208.7436.9659.2806 1.014.6903.9659 1.4984-.2254 1.0629.2898.4032.2091 1.1613.5473 1.2935 1.1913.8274.853 1.2048 1.7063 1.2323 1.5451.5403 1.642.1532 1.1428-.5209-.3541-.7952.338-.3984.9336.044v.8032l1.2395.2903 1.7705 1.0178.9818.031 1.3682.4306 2.8492.086 1.2072.5806 1.1267.2904 1.8672 1.0967 1.6097 1.258 2.8169 1.258.9657.6936 1.2234.3872 1.9476 1.6289 1.2233.8065 1.642.7581 1.3521.2095 1.4485-.064 1.0142.1452 1.3521 1.0323.7886.2903 3.4608.081 2.0443-.3225 4.5553-.4033 1.2072.2259 1.497.081 1.4647.4193 2.4468-.129.1449-.8386-.4507-1.4516.161-.742-.4667-.7903-.081-.8709.2252-.5001-.1288-1.3226.5151-1.3064-.3864-.4838-1.175-.097-1.0141-.6936-.5633-.6611-1.143-.7887-1.1911-1.5081-1.0784-1.0048-1.0301.011-.8049.5209-2.0764.4371-1.5132-.7113-.8047-.9403-.7243-1.2999-.2576-.8516-1.2717-1.8774-.837-1.7403.3703-1.3726-.032-.5919.515-1.371.2094-2.8128-.2094-1.2871-.081-1.679-.5794-1.2806-1.1911.2451-2.0282-.2806-1.4004-.642-.4185.1259-.097-1.4726-1.1911-.9661-.6116-.1258-.1288-.5726.1771-1.2903.6277-.8 2.0443-1.1597.1769.1452 1.7386-.7016.9174-1.158-.032-.6597-.3863-.75-.2415-1.5919-.4667-.4774-.7405-1.6113.1932-.8387-.064-1.8999.2736-.8597.032-1.0581.8692-1.8596-.1771-.4839-.1127-2.8112.2736-2.1597 1.8027-3.7564.7566-.4983 1.4809-.1968 3.2515.037 3.3964-.04 1.1911-.6613.499-.9548.4506-1.5774 4.1852-3.1855.8209-.2274.4668-.6548 1.5773-1.4887.2898-.6323.7888-.018-.3542-5.9467 1.4809-.1194.5312-.5161-.4668-.7839-1.2072-.1274.6761-.8032-.1449-.2839-1.32-.5726.081-1.0112.9174-.3323.3382.7435 1.1428-.3693-.8371-.9419.8371-.2-.2897-1.2806-.9497.027.2093-1.0613-.4348-.1935-.1449-1.0629.7242-.2823-.4184-.8371.821-.9887-.1611-.9854-.4023-.7436-.9176.1259.6278-1.5258-.6761-.5258-.3218-.7645 1.4968-.8613.081-.4468-1.2394-1.9774-4.0563-3.558-3.3157-1.75-4.7969-2.2886 3.1871-3.8403-.8048-7.6483-1.1911-1.6467-.7566-.1307.5795-1.5451-.032-.6887-.8208-1.3484-.5472-1.571.3379-.2677 1.3039.1823.4506-.8581-.9657-.2822.821-.792.2574-.5419-.4828-.5629-.9659.2194-.9496-.3968-.032-1.1258-.8371-.2323-.161.55-1.2557.069-.7886-.9887-1.1911-.8209-1.0302-1.7516.1127-.621-.8693-.2742-1.4004-1.1499 1.1269-.6178-.4831-.9774-1.1589-.4048-1.8349.1-.7566-.2838.9659-1.4662-14.342-5.4579-3.9275-1.4178-5.5533-2.137-.032-.1323-1.5131-17.651.8532-1.7887.2896-1.0387-1.851-3.4225-.8371-1.6935-1.7706-3.3016-3.1709-.014-2.0604-.1194-5.7464-.2258-2.7365-11.466-.064-.8822-2.3822.579-2.4949.5081-4.5875 1.1306-4.9255 1.0951-1.2716-4.3289-1.9316-6.0209-4.1368-4.8128.2737-.5758-1.9638-1.9774-.9014-1.8581-.4507-1.4983-1.2555-1.5371-3.1388-3.3822v-.2484l-3.8792-4.3725-1.2878-1.3549 3.2032-2.7418 1.7706-1.4903.6439.8306 2.0925 3.087 3.01-1.8419 5.3119-3.479-2.4628-2.358-2.0281-2.3693-.8854-1.6064 1.2233-6.0177.161-4.1322 2.3339.3903.4187-1.6709-1.1752-.8484-1.513-.5064-.4667.082 1.7866-7.0515.4346-.9951-.097-.7097.6439-1.8871-6.0522-4.1128-3.4608-2.0693-3.5574-2.3032-.4507-8.037-2.3339-.6258-.161-2.5161-.9014-10.424-2.5594-.4081-2.704-.5693v-.871l.5472-2.3709.8208-1.4484-.4506-.09-1.2556-2.0822-1.3199-.9564-1.336-1.2306-1.8189 2.2467-.7404 2.6645-.3702 1.9564-.2898.7855-1.9315.2838-1.0624-1.179-.9014-.9338-5.4727-6.0483-2.2214-2.5032-2.672-4.8435-.177-.069-1.3199-2.4048.9818-2.3451 1.4165-1.7322 1.1911-1.7436.4668-.2145-1.0784-1.0274-1.7706-1.0532-.4669-.779-1.6096-.5952-.3381-.8322-1.4646-1.4758-.5152-.9726.3542-.779.7404-.01 8.4185-2.2757 4.8932.3177-1.2716-8.9386-1.4809-.3838-.081-.3291-3.815-1.029-.1449.1984-2.8492-.8145-.3379.5387-1.8672-.5323.016-.6112-1.9959-.5887.032-.2807-2.5434-.7355-.097.3049-1.32-.479.032-.2404-1.4326-.4032-.161-.2161-3.0744-.8097-.2254-.358-1.1106-.3274-.2093.2241-3.7343-1.0419-5.9074-1.7145-1.32-2.8902-2.2212-3.4242-.161-2.9548-.7404-.1742-1.3683-.2322-1.9959-1.7952-3.0261-2.5612-6.4547-5.6387 3.6861-5.0628-1.9638-1.4822-5.6659-4.1677.9657-1.3016-2.9295-2.2 3.0261-12.235-.3058-.6338-1.5775.06-1.175-.6935-.3702-.5806-1.0946-.9339 2.4949-1.6419 1.497.026 4.7646-3.1048 6.181-4.1209-2.9617-4.5935 3.4767-2.2612.1611-.2307 2.5432-6.4354-1.7706-3.2628-.6116-1.3065 1.336-.6306 3.3964-.8145 3.4767-.6613 3.9758-.6274 7.8068-1.4903.2415.7 2.0121 2.5693.9174.044 1.2877-1.3807 1.0303.3758-.4347 1.0903.3059.6904 2.4788.3048 1.6257.3822 3.4769-1.9354.1288-.4177-.6117-.4726-.9175-.053-1.2233.4226-.8532.5081.1288-1.5161.5795-1.1871 1.2233-.5403.5794-.942-.515-.5709-.7083-.2484.1932-.979-.2415-.4113-1.1106-.5758-.9496-2.2177 7.2111.05-.1288-2.7193 3.187.3371 1.1751-6.6596.9175-1.0113 1.0462.1581.9657-1.5822.4025-.27903 4.7967-.60484-.1288-.4903-2.4307-5.3548 1.1269-2.0016.016-.75644 1.1267-.24192 1.1106-.81936 1.0623-.17741.6118.27097.5795-.60645 7.1146.62742.6439 3.7354.193.59516.7405.33226 7.2273 3.5144 1.1267-2.379 11.815 5.6677 5.8752.61773-.064-.27581 1.9637.21452 2.3179-1.3419 1.4326 1.3258.837-.68063.4185.42902-.7566.87096.5153.8048-.5314.6484-.354-.2371-.6278.6339.5473.4661.048 2.9725.354 2.9919-.9818.071-.6921.9065.064.5838-.4185.4097.3863.8371 2.7203.8838-.4347.7887.6116.6 1.3683.1452 1.5614 1.0081 3.6377 5.5241 1.0303.8032 1.014-.064 1.7224-.8516 1.5452-1.5758.676-1.0145.6278.2354 1.3199.087 1.7223-.8678 1.1108-1.2532 2.2695-.3403 2.2214.4226 1.0623.5709.4345.7613 1.1269-.2258 12.008-.3387-.4829-3.987 3.67-.3855 6.7444-.8355-.2576 4.5935 15.066.8532 1.0462.019 1.1589-.4178 1.3843.2242-.6117.7162.8693 1.3902.2093-.8709.5634-.6694.4345-1.3354.9979-.4742.7727.4177.081 1.0081.5472 1.4177 1.4005 1.6016.5794.1065.8049-.85.2254-1.0081.7082-.1129 6.1971 2.9096.9496-2.5274 1.1591-1.6693-1.3843-.6193-2.5433-1.6323 1.4649-.7258.032-.5161-.9819-.2661-.4023-.9839 1.014.1517-.1932-1.4629 2.3985-.2065 1.1589-.5 1.8994-.8709 6.9214.1822 8.515-6.8176 8.177-6.4547 3.2515.35966 1.336-1.2-.6278-.93387-.1288-1.6774-.4989-3.087-.032-.6758.8209-.29031 1.5132-.1452-.097-1.9145 2.3661-.34839.5794.60968 1.4165-.47581.9176.21613-.7243-.52257-.1772-.79354-.6438-1.2032-.5312-.59836 4.4104-3.8725.5795.23871 2.0443 1.2742 1.4648-.78386 1.2555-1.8354-.032-1.1645-.7727-.9258.9337-2.208 1.7062-.15648.4989-1.1935-1.2555-2.2968.2898-.34675-1.0464-2.2532.5473-.65645 1.7707.47097 1.8994.20484.4507.21936.515-1.6048 3.6701 1.5935 3.2032 1.2468-.8371-4.0483 2.3179-3.7112.8853-1.6306-.8209-.93226.2254-1.3064-.032-1.2032 1.9959-.79516.66.65161 1.3199.0532.5634-.35483.6599.19998.821-.87256.8208-1.1855 2.7525-4.2209.4024.0597 1.1107-1.108 1.2556.90321.7243-.59516 7.7424.72903 4.024 4.8451.2898.0807 1.7867-1.5226 1.2072-1.2371.7082.0532.982 1.2419 2.8168-1.0016 1.6258-4.3499 3.6055.31129 1.1269-.3758 1.8672.29999.3057.21452.8371 2.2403 1.0945 1.1919 1.9638 1.9064 3.2837-.10164.016.26613 2.2857.25806 1.7867 1.4177 2.0443-3.3193.9818 1.5726 1.3199-1.071-.8049-1.2258-.016-.81933 1.3522-1.6516.2093-1.9984.8692-2.687-.5474-.88546.3703-1.0435-.2093-1.0935.6278-.86451 1.9637-.83708.4507-1.0258.5957-.51935.6759-.0807.5152-.62257 1.3199.40321v-1.271l.4185-.93063 1.2555.59999 1.2555-1.458 2.3341 1.4048-.4025 1.8726.1288.52419 1.0784.4629 1.2716-.0903 1.9316 3.487 4.5392.89192.3059 5.208 14.632-.26452.2737 9.8208 2.7526-.0532 5.2473-.89192 1.6258.0968.7726.62579-.3059.49515.3059 2.0838 1.5613.10648-.2413 3.658 3.847 2.9677.9335-.61288-.1288-.7371-.5956-1.5484-.4667-.50967.4828-.41935 7.8068-3.2177 3.332.86451.7083.87902-.3541 2.3532 2.012 1.1742.2093-.66289.6599-.38387.322-1.0274.7242-1.0064.064-1.1774.5795-.97096 1.0947-.0597.9335.27097.7887-.26451.5151.66128.1127.74353.5472.75645.7888.49515.064 1.1952 1.8833.89999.9658.33871.161-.54517 1.7225.56612.6116-.90482 1.3682-1.0742-.097-1.8435 4.0242-.1452 2.3178-.0145.1771-.92418 2.0924-1.0919.4508.0516 2.2213 1.6629 1.7385-.69031 1.2072.64999 1.1267.2387 4.4587 1.2306.097 1.608 3.5411 1.1516 1.7386.40482 13.344 2.9564 5.7947 1.3209 2.9296.61935-.2415 1.0661.6278.18065 1.4648.81289 2.5432 1.8032 3.171-.20323 10.752-.77257-.016-1.2806.9658-1.0935.032-.63547-.7082-1.3516v-2.6612l4.8449-.12261 6.3583-1.7968-.5475-.79836-.6599-1.6613 3.6218-1.9129 1.4165.73548.3219-.45483 1.336-2.8887-1.3038-2.0258-3.6056-1.2032-2.1731-.64999-1.9959.38225-.7727-1.8774-.4506-1.429 1.6256-1.0274.66-.2387.4025 1.1693.2735.042 3.0907-1.0984.5472-.26935 1.4488-.071-.8371-1.6887 1.8672-.77095 3.0904-1.1355 3.5574-1.6532 1.7545-.66772.2415.929.5956-.0565 3.0743-.96127 1.1107 2.5709.016 1.2274 1.7383 1.2726.6439 1.6387h.6279l1.5935 1.3419.4023-.54193.6761-.20484.9658-1.658-.1932-1.1903.7888.60161 8.1447-10.856 6.4225 4.9161 7.839 6.0838-.4346.57257 2.4628 1.9258.064 1.2984.6438.2629-.2737.69192 2.8653 1.4258-.5473.66451-.4184 1.0226.2896 1.2.6761.2774.7887-2.2677.338-.33547 1.6258-.0565 1.6257-1.2838.9175-.5016 2.35 2.1242 1.0142-1.6403-.4669-.51291-1.8028-.99191.1127-.41774 1.4005-.88224.9335-.40645.8209-.10648 1.4648.37741-.081.67096.3541.72579.6438.53225.4831-.42095 2.8972.5645.3703.6145.853.0694 1.7386 1.2758 1.1428.45161-2.2214 5.8386-1.4647-.5113-.3703.54032-.5794-.27742-.821 1.079.9659.071 3.171 2.9838 1.6095-.41774.4991.47903 1.1751-.50646.5311-2.0016 1.3682-2.808.2575-2.2113.5152-4.6064 5.6659-1.4806 3.2676-2.6645.7405-.35645.4989-.63225 4.2011-1.1548 3.7345.14681 1.6096.61128 2.5754-.3516 1.0464-.83547 2.9133-3.008 2.4628 3.0645.4669-.27096 3.171 1.3306.9335-.14843.4025 1.5355.3701.6629.5151 4.2758.998 7.2741.081.32258-.7083 6.3741-.6922 6.5951.161 2.2113.4025 3.7983.499 1.9516.821.84354-.2415.5629 2.6076 1.8951 1.5453-.27418 1.2233 2.4903.7083 1.9129 2.0765 3.5161 6.696 4.7741 5.843 3.6096 1.0303.921 1.2233.1581 2.9295 2.9774 1.851 1.7742 1.4809 1.0274.7727-.7758.4507.3322.6599 1.1258.2093 1.2435 4.4104 1.9952-1.8672 1.8112-1.8349 1.6161 1.2394.5.9335 2.0484-.5795.6097 2.2858 2.7322 4.7806 2.9161.3381.8854-.5312 1.5436-2.3985 5.3112.032.2242 10.962 9.695 3.0744 2.5274.6761.7242 1.8351-.7194 4.9898.6565 6.9537 1.0016 3.2515 1.6435-.5634.5661-1.5614 2.0484.8531.4225-.2896 1.5162.9818 1.379.6439 1.3999.5472.7468-.7404.6371-.016 1.3226-.1931.4499-1.1752.1581-.4023.3839.1127 1.5242.3057.8193 1.4005 1.5355.5633.01 1.2394.8435-.1449.821.4346.1581.7565-.3613.9657-.8468.1449-.471-.4023-.6516-1.0786-.329-.2896-.9403 1.1589-.5984.4828.879.9498.2775.3863-.1598 1.1589.3146.1288.5677.7243.3064 1.2716.9355 1.3683 1.8371.7887.5226-.6438.7919-.032 1.2693.5472.5194.1127 1.1725.9657-.9983-.2735-.8968-.8693-.4968.9981-.9742 2.189 3.8355-.4185 1.0483-1.7222 6.0274-.821 1.6258-1.5453-.1533-2.0765 3.0258-6.0038 8.9901.5633 2.1532 2.35.2887-1.5451 5.0226-.5313 2.0064 2.8169-.042.2093.4065.4024 4.9112 1.8671.3564-.081 3.3435.8693-.01.6438.3081 2.9134 2.1983 1.5131.7194.2254.6645.9014.9758.4991-.1888.5955-.9451.8691-.9242.2254-.9693 1.175.2548 1.3522-.1677.7404.9742 1.8511 1.2548 2.3019 1.1048.7564.121.5633.4806 1.0625.271 1.0784-.092 1.0625 1.8403.6116.7049.7081-.031 1.5776-.6338.6277-.6742 1.0142.2258-.064.4661.5311.6419.5634.1339.9657-1.5612.5635-.024.8852.579-.3862.7306.9013.5613.8692-.1452.7727.2016-.6761-1.2645.338-.9677.9175-.5048.3863-.9791-.2897-.2822.66-1.9145.016-.5339.7083-1.0016.7082-.4629-.016-.4983-.8209-.8145.9657-.1469.676.7807.6278.2564-1.4003 1.7452.097 3.7983.4991 2.6516.3058.8629.4989.2451.9176-.8354.6922-.085.4828.3016.8693.055.5311-.5532 1.2233-.1452.2416-.7532-.5153-.8177.1449-1.8452.6117-.5322-.7886-1.371-.7727-.2322.6439-1.7919 2.1407-2.1065-.9818-1.2274-.322-2.5806-.1288-2.1193.193-.529 1.3844-.4565 1.2233-.7758.515.4178 2.1248.3758.66-1.8629.9658-1.0758 2.2212-.9613 3.9437 1.0661-.2575 2.2032-2.2374 3.05 1.8027.1436.7405-.8258.3542.5951 3.686-.4854.081-.5162 4.2011-2.2903 5.1992-.6209-.6761-1.9903 2.0604-.3371 4.1691.063 1.4646.6226 1.2394 1.2145 2.6399-1.308 1.2072-2.4016.322-.3645 1.4165 1.1757.4829.1694 2.672.2226 2.2534.2903 7.5816.8693 2.6237.7823 3.3157.8887 4.1852 1.1871-1.9638 7.2676.097 2.2645.9657 13.921 3.2354-.4581.032.7693 1.7224.4387.2092 4.729 1.3843.3258.4508 3.0483-6.7767 4.9209-.8693 2.9403-2.8811 3.1258-1.3843 1.5709-1.9799 2.0419-2.2695 2.4661-2.0926 3.9032-.9659 1.9193-2.7042 5.0306-.853 1.0597-2.2858 3.1773-1.4326 1.8758-1.175.9339-.7083.7645 1.658 6.6967.6922 2.9515 2.0765-.4725.2735.6016.5634.086.1288.7387-.8532 1.7774-.9335.7209-.4025.5613-.66.3113-2.4305.2048.048 1.4016.5151.7726 1.1268.3645 1.6257-.8903 1.6258 1.6838 1.014.4484 3.6539 4.6354 5.1025-1.3161.7888 1.4274 5.8752 11.137 1.996 2.5886 4.507 4.0193 2.2697 1.4 2.4144-1.8.7243.5984 3.9437 2.1581 4.7805 2.5128 1.8833-1.4887.9981-1.0354.2413-.8774 1.7225-1.3113 8.1125.9242-.2575 1.6354-2.4789.5532.4347 2.5097-1.175.3048-1.5132.09.032.4548.8371.8774.2252.8161 1.0142.4661 1.7384 1.3258.9496.979.2737.621.982.671 1.4163.1484 2.8975-.8726 3.0421.521 2.6882.5854 3.4286 2.4242 3.6699-1.6919 1.7062-1.6516.9175.2774 5.4246 2.1468 1.3038 2.4225 4.9416 1.8693 3.2354 1.2839-.6761 1.8451 1.9638.1307.1932.329 1.5129.4065.7888.01.3059.6807.8208.5112.3381.5-.3542 2.0129-.5956 1.2645-.1449 1.7726.3865 1.8822.3057.8387 1.2396 1.4645-.7566 1.0919-1.4809.4032-.7888-.9258-1.2072.6436-.6599 1.0903-.8049.7435.7727 1.0403-.8371.4097.5635.4194.7886 1.1499 1.7063 1.0694-1.6902 2.9064 1.1911 3.5258.7888.758-.9496 2.1822-.7727 1.1807-.032 1.4064-.4667 1.0354 1.0784 1.0468.097 1.5677.6438 1.3387-.5955.5436 3.8631 4.3176 2.0926-.1581 1.5613.068 5.6659 1.0871.837 4.2741.4668 2.7355-1.0623.089-.048.9032-.9174.071-.9498.5742-.7082-1.1629-2.1248 1.0354 1.1752 1.2936 2.4788.3951-.097.2742-3.3964 6.0354.7243-.034 1.014.8322 3.5896 1.9468.3058.4999 1.2074.1629 1.7705.048-.016-.5693 2.0604.1177 1.9799-.082 2.1085-.2549 2.5271.442 4.4428 1.037 1.5773.6242 3.5091 6.7886 3.4607-.2935 4.8934-.3097 4.008-.35-.048-.8806 1.2555-.2129 1.4808-.055 6.503-.5532.5311-.7274 1.4488-.053.2898 3.0386-2.8653.9307.4508 2.9386 1.4647 1.8629 1.143 1.3048 2.2373 3.1.4667.1242.4348 1.4855 1.1428 2.2371.8531 2.7177.8208 3.0176 1.7547 5.7903 3.8631 8.7418 1.7223 4.2145-.66.5354-1.0945.5081-.982.2322-.1288 1.0758-.7886.092-6.7445.7484-2.1247.1951-2.9295.3887-4.7807.4065-.4185.2693-.5633.9565-.161.9999.2415.7355.5472.6516 5.36 1.2742-.853 3.5596 2.1248.4371-1.3521 5.3612 5.9395 1.4694-.064.4161 9.3197 2.2193.1932 1.0339 1.2877 2.4467-.4828 2.1709-1.9155 7.5112-5.0061-1.1709-.2736 1.2532-2.8813-.6774-3.2515-.8516-5.7142-1.3726-1.5131-.4097-5.0704-1.1822-4.7002-1.1613-4.2172-.9548-6.5996-1.5613-.8048 3.2532.1449.05-2.2212 9.5934-.2415.442-1.481 6.4063 8.2415 1.9548 1.9638 2.0274.5473-.7564.9979.279.998-.3645-.2737 1.3016-.5794 1.8709-.9981 4.2951-.2735 1.3774-1.7706 7.6064-.2254.8758 6.2937 2.1919 1.3843.6483-.5312.3468-.8048 1.2661-5.2797 7.158-1.8189 2.5806-2.0603 2.5322-5.2475 6.1936-.2897.5967-9.014 10.613-.9336 1.1614 2.4146 8.7901-1.4005 1.6612-1.0463.2743.4186.8549-1.2072.5322.3218.8226-.3379.9838-.8049.081-.016 1.3549-.322 1.2903-3.4606-2.0807 1.1267-2.7258-5.5854-3.2741-6.6801-.5807-.5151 1.0485-11.638.048-4.1046-.9839-8.2253-1.8548-2.7686.3547-1.6579.3066-2.2375.129-.676-.4999-1.2555.629-.8049-.3872-1.175-1.0806-.9496-1.6129-.2737-.887-.5151-.742-.097-.6935.1127-1.5162-3.4125-1.7902-7.0502-3.8064-.3379-.2097-2.6077 2.129-.7404.4354-1.3683 2.8872 1.32.5645-1.3522 2.4999-1.2716 2.1452.3541.2418-1.0784 1.8548-1.3038-.6611-1.6418 5.403-.7083 1.8225-1.2877 3.6937.032.2418-1.3199 3.8386-1.9799 6.129.3863 1.4194 1.3682 5.8225 1.5292 5.9193 1.513 6.2579.3703 1.3226 3.2837 13.355.354 1.6129 1.2233 4.3709-1.2877.7742-.4184-.2581.5311-1.4678-.7887-.1934-.2897.7419-.5313-.2097-.3057-.9355.4506-.3225-.3379-.7258.3862-.4193-1.336-1.6775-1.0462-1.3549-1.2233-1.0483-1.3199.4193-1.0464-2.6774-.7725-.2902-1.0625-.9839-.4989-.8386-.097-.6774-.6439-.4034-.9657-.2257-1.2394.1614-.6117-.5323-.1771-.7096.3058-1.1451-.6439-.6452-.2091 1.3871-.821.064-.3059-.629.5474-.3065.3058-1.1935-.338-.3386-1.497 1.2419.064-1.0324-1.1428-.016-.048-1.1774-3.4608 5.6452-.8532-1.3387-.7243-.629-.3702.2902-.8692 1.5807-.6922 2.0323-.3863 5.2255v1.1131l-.2737 1.6773-1.2233.242-.6277.4354-1.2716-.887-.4185 1.3224-1.0462 1.0808-.8854.6128-.3703-.3387-1.3841.129-.7566-.6451-1.5775-2.5484-3.9437-1.4677.4508-.6775-.7726-.9515.1449-.7258.8047-1.016 1.0303-.2582.4506-.5644.7566-.113.9657.871-.064.6129 2.3661.1935 1.336-.6936 1.1911-2.3709.1771-.887-.9819-.6774-1.2716.9193-.66-.6452-.9496-.2741-1.1108.258-.5633-.2096-.2897-.6291-2.3502-.4032-1.3843-.081-1.9155-.9838-.5472-.9194-.2092-1.6773-.3864.065-1.4809-.3549-1.0301.4356-.7727-.1936-1.3038.4516-1.5612.129-1.6259.6129-.2896-.3709-1.1911.9354.4828 1.2258.081.7903.8369.1614.5634-.2582-.097 1.0324-.8854.2741-.032.9194.7727-.5161.5633.5483-1.5614.9193-.9335-.016-.6116.4678-.3381.6773.1932.371-.4185.9677-.5152.371-1.0784.1291-.7566-.9194.2415-1.4839-.9336-.8063.1449-.7259.5794-.3871-.5633-.8386-2.8009 1.016-.1769.3065-.8854-.1774-.7887.4999-.048-.8548-2.6399.8064-.2252.9678-1.175.9838-1.2716-.2418-.1449.6451-.6439.6934-.7083-.4515-.097.7419-.354.2259 1.2072 3.1773.7083.8225.016 1.9516-.2576.7097 1.0462 3.0323-4.684-.7742-.1449 1.3064-.6438.097-1.3844-1.5162-.837.1452-.4346.9354-2.0765 2.1452-.515.2743-1.7706-.3711-1.8188 1.5968-1.9155 1.2419-2.1892-.016-.9659-1.9355-.3379-.1129-.7405.6936-.9818.387.4668.7097-1.1428.064-.1449-.7581-.7405.2581-.4184.4677.1769 3.5807-.8208.3386-3.7828.5968-.8369-.8065-.048-.5806-1.0142-.7097-1.0623.4679-.064-.871-.4184-.6613.2413-.4677-.692-1.3065-1.2877.5161-.1771.5161-.8371.4679-.6277 1.258-.3219.1452-1.2557-.629-1.0784.1775-.7082 1.0644-.5795.6774-4.1206 2.3549.4024 1.1774-.9498.4838-.6921-.016-.499.7581-.5956-.3709.306-.9033-.7566-.3065-.4186.613-1.0462.081.016 1.0162.2737 1.4355-.4991.065-.2092.6934.3219.5969.1932 1.7419.3701.5645.6761.2742-.3702 1.1129-1.2877-.4034-.4023-.3708-.7888.081-1.4487-.3226-.5634-.8386-.5311.1452-.6278.871.4346 1.129-.5312.8548-.5955.4355-.097.9355.7726.4354-.3059.7258-.7726.1291-.4668.4193v.871l.66.9356-.8693.629-.338 1.403 1.8028 2.0484-.4506.4517 1.1428 1.4193-2.4789 2.0967-.3703-.387-1.4646 1.4837-.3864-.4193-2.4789.7743-.6116.097-4.3621-4.0807-3.332-3.0644-.9176.6774-.1449.3709-1.2394.9033-.9497 1.4837-.9337.7581-5.6981-4.387-.7888-.5484-.4184.7097-2.157 2.9515-.499-.1934-1.3521-.9839-4.346-3.3387-4.7968-3.5967-3.2835-2.5483-2.4468-1.1935.2093 1.0805.7727 2.7259.097 1.403.354 1.0646-.8049 1.4033 1.4327 2.145.3542 1.9193 1.1911 4.0484-6.7606 1.7741 1.3682 2.9355-9.3036 3.9193.9335 2.0161-3.0583 2.7902.2574 2.0484-2.4788.081-3.1549 3.0321-.3218 1.1614-1.336 2.8386 3.8309 1.5484 1.6096.8872-.66 1.6773 2.4788 1.9193-3.6216 5.758.1288.1129-2.7525 4.4516-.1932-.032-4.4265 7.0805-1.9638 11.177-.4829 3.0967-.6921 3.8387 3.0261 2.4999-1.4003 1.8709 8.2575 5.3064-.1128 1.0808-.2415 5.1289 3.332-.1129.5151-.016-.032 3.3709-.3219.887-1.2072 1.3548-1.6741.6613-.1288-1.0806-1.6258-.3065-1.6901.048-.5794 6.0968 1.2394-.1291.9335.8387.7726-.3549 1.0784.4679.9659-.5001.3541.2097.2254.9194-1.2556.3547.081.6129-.4184 1.1613-2.0443-.2903.2253-.516-1.1106.097-.1288.5162-1.8511-.2581-6.0523.242.2415 7.5643.1449 6.8547 4.2011-.1452 2.3985-3.0162 5.0542 3.6936-.4345.5968-1.1269.5967-.9979 1.2419-1.4648.8386-.7566.6774-.7727 2.113-.8369.4194-1.5453.3064-.3701.242.6116 2.274-.676.8711.3379.4676 1.175.065-.9657 2.4515.3219 1.3871-1.4647.4677-.048.5485-1.9316 1.6935.9174.8065-.016.6129-1.1589.1773-.4667.3549.1449.9354 1.175.9355.3701.9676-.3862.6775-1.7545.5001-.4508 1.4676-1.0623-.2902 1.0301-3.9032.3059-1.9516-2.8491-2.4032-3.992-1.113-2.5754.242-1.7867.048-1.5773-.3065-1.2394-.6774-1.3522-.9999-1.0785-1.0806-.8852-1.4032-1.143-.7904-1.7706-.7097-2.5271.5323-1.3038-.2257-1.4648-1.1292-2.7202-3.6934-.8049-.8872-2.6237-1.5805-3.9275 1.0322-2.5594.2258-3.2354.032-.7887-.2259-1.0623-.7903-1.1267-1.4353-1.7708-2.5161-.8852-1.5-.2415-1.0806-.2093-2.7904 1.9799-4.5644.161-1.1935-.2576-.8388-.6761-1.016-1.1589-.5968-1.9155-1.9033-1.2072-.7418-1.4004-.3872-1.6095.1291-.6117.242-2.0282 1.2903-1.7224.3709-.9818-.065-1.6418-.6935-1.497-1.7741-1.2877-2.1291-1.0303-1.129-1.1911-.8226-1.4004-.3063-1.6579-.7259-.3057-.371-1.1752-4.1611-.515-1.4355-2.0604-1.9194-.7566-.2742-5.4888-1.0645-3.5735-.2741-1.5934-.242-.5956-.2419-4.9577-3.129-2.1086-1.3871-1.175-.5322-2.3341-.032-1.0462-.3225-1.481-.371-1.8993-1.8064-.6761-.8065-1.9155-2.9031-1.7544-2.3549-1.497-.6613-1.5774-.8063-1.8834-.8065-3.2032-1.0323-2.0441-1.4193-2.9297-2.6128-.9496-.9356-1.5775-1.9354-1.8189-1.8871-2.157-1.2741-3.2514-1.4678-1.4649-.4677-2.3822-.3388-2.4466.3711-3.2193-.6291-2.5915-.629-2.2697-1.0805.064-.6131-1.3199.081-2.3983.9839-3.1871.8388-1.6096-.1452-1.3843.4838-1.6097.1452-1.3522-.4195-2.1246-1.3225-1.2234-.2257-1.2556-.7743-.8369-1.4032-1.851-1.5805-1.7869-1.4033-3.686-7.6611-5.8108.2257-1.5131.5161-.4346.5162-.064 1.8548-.2093 1.0645-.4345 1.0967-3.1388 2.6935h-1.2072l.3057 1.4678-.9174.9355-.9176-.8549-2.7203 4.5806 2.2214 1.371-.8049 1.4032-4.346 7.1451-2.0281.3386-.338-1.7418-3.5735.6612.3864 1.8064 1.5291-.2581.2093 1.5968-4.0564-.6612-1.2555-.065-1.9799.1936-.2254-2.4678-.2574-.258-1.3521.032-.9659-4.9999-10.656 1.9837.3219 1.6936-1.352.1452-1.6741 1.8064-.048 1.0644-.5311.2904-1.7062-.5161-1.0464.7257 1.2233-8.145-1.4968-1.3387.1127-1.016.7242-4.871-11.799-1.9355-.483 3.6935-.3541 1.8388-7.0985-4.4356-.7888.8065.081 1.5485.6599 8.6289-1.4648-1.0807-6.7121-4.4999-4.7002-3.2097.064-2.3063-1.1428-.032-.9337.5806-3.1549 1.5806-.499-1.0645-2.9779 1.371-1.7062-4.0161 3.0261-1.2419-3.525-8.145.016-1.113-3.6057-7.9675.66-.6936-.821-1.887 2.5595-.9033.5472-.5161.7405-1.113 1.8028-1.1935.7565-.3548.9335-.7419.6922-.9194.1449-2.2902-.1932-1.5485-.6278-.9676-.4023-1.3548-.7888-1.1774-1.0945.2096.081-1.2742.8208.032.032-2.0643-.2735-.7258-.6439-.7097.032-.9194.8208-1.3226v-.7258l-.5955-.4516-1.3039.1936-.6116-.1936-2.5593-3.1128-1.4327-1.8548-2.189-3.5968-2.4788.2097.4184-1.1451-.1771-.4356-1.69-.387-.7244-.5483.1932-.7097-2.157-.2259.3219-1.0322.7243.032 1.5776-.6935.9496-.7097.7082.387.9337.1936.2896-.4838 1.0464.4838.3702-.2902 1.8188-3.5968 2.4468-4.9354-3.6218-1.3064-1.5934-1.1613-3.2193-4.2581-1.1589.3388-.032-1.5-.2415-.3872-.1128-2.3225-1.2877-3.4032-5.6176-5.5321-.7243.3548.4667.4839 1.4004 4.5484.8049 2.8385.048 11.097-.016 2.2258.016 8.6127-.6117 4.6128"></path>
            </g>
            {/* ./MAP REGIONS */}

            {/* NAME REGIONS */}
            {regionPoltavskiy && <PoltavskiyName />}
            {regionKremenchuksky && <KremenchukskyName />}
            {regionLubensky && <LubenskyName />}
            {regionMirgorodsky && <MirgorodskyName />}
            {/* ./NAME REGIONS */}

            {/* NAME GLOBAL REGIONS */}
            <g
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth="1.6113"
                transform="scale(.999 1.001)"
                fill={regionPoltava ? '#fff' : BLUE}
                fillOpacity=".92549"
                opacity=".85"
                aria-label="Полтавська">
                <path d="m3070.1 1281.7h-8.8532v-40.101h-11.837v40.101h-8.9187v-47.938h29.609z" />
                <path d="m3105.1 1263.4q0 8.9843-3.8036 14.001-3.8036 4.984-10.427 4.984-4.1971 0-7.4104-2.2953-3.2134-2.2952-4.9512-6.5906-1.7379-4.3282-1.7379-10.099 0-8.8859 3.7708-13.87 3.7708-5.0168 10.46-5.0168 6.4596 0 10.263 5.1152 3.8364 5.0823 3.8364 13.772zm-19.411 0q0 5.7054 1.246 8.6236 1.246 2.9183 4.0003 2.9183 5.2463 0 5.2463-11.542 0-5.7381-1.2788-8.558-1.246-2.8527-3.9675-2.8527-2.7543 0-4.0003 2.8527-1.246 2.8199-1.246 8.558z" />
                <path d="m3137.7 1281.7h-8.7547v-29.478h-4.8856q-.6558 11.116-2.1314 17.641-1.4427 6.5251-3.9019 9.4762-2.4264 2.951-6.4595 2.951-2.4592 0-4.0331-.7214v-7.1808q.9837.3279 2.0001.3279 2.7544 0 4.2955-7.017 1.5411-7.0497 2.3608-22.526h21.51z" />
                <path d="m3167.6 1245.2v7.0497h-8.1318v29.478h-8.722v-29.478h-8.1317v-7.0497z" />
                <path d="m3189.4 1281.7-1.7379-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266-2.0658 1.2132-5.2135 1.2132-4.0331 0-6.3612-3.0166-2.2952-3.0167-2.2952-8.3941 0-5.771 3.1477-8.5581 3.1806-2.8198 9.4762-3.115l4.8528-.1967v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5415 2.5576l-3.0166-6.0333q5.443-3.4429 11.837-3.4429 5.8038 0 8.8204 3.3446 3.0494 3.3117 3.0494 9.4105v24.526zm-7.5744-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.1312q-2.9839.1639-4.3938 1.705-1.3772 1.5411-1.3772 4.5906 0 4.5249 3.2134 4.5249z" />
                <path d="m3228.9 1254.7q0 3.0822-1.8362 5.148-1.8034 2.0329-5.2791 2.6231v.2623q3.8364.4919 6.0005 2.656 2.1968 2.1313 2.1968 5.5414 0 5.2463-3.7052 8.0334t-10.591 2.7871h-12.821v-36.527h12.755q13.28 0 13.28 9.4761zm-7.9678 15.706q0-2.3281-1.5083-3.3446-1.5084-1.0164-4.5578-1.0164h-3.2789v9.181h3.4101q5.9349 0 5.9349-4.82zm-.9509-14.919q0-3.6068-4.7873-3.6068h-3.6068v7.7055h2.6231q2.8855 0 4.3282-.9181 1.4428-.9509 1.4428-3.1806z" />
                <path d="m3247.4 1282.4q-6.5251 0-9.9352-4.7545-3.4101-4.7544-3.4101-13.968 0-9.64 3.2134-14.394 3.2461-4.7545 10.001-4.7545 2.0329 0 4.2626.5902t4.0003 1.7051l-2.492 6.7874q-2.7215-1.6067-4.82-1.6067-2.7871 0-4.0331 2.9183-1.2133 2.8854-1.2133 8.6892 0 5.6725 1.2133 8.4924 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2952v7.6727q-3.4429 2.1313-7.6072 2.1313z" />
                <path d="m3269 1259.5h3.0822q7.3121 0 10.755 2.6559 3.4756 2.656 3.4756 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.7219zm8.3285 10.886q0-2.3281-1.4099-3.3446-1.3772-1.0164-4.4266-1.0164h-2.492v9.181h2.6232q2.7215 0 4.197-1.082 1.5083-1.1149 1.5083-3.738z" />
                <path d="m3310 1245.2h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
                <path d="m3341.5 1281.7-1.7378-4.984h-.1968q-1.9345 3.2134-4.0003 4.4266-2.0657 1.2132-5.2135 1.2132-4.0331 0-6.3611-3.0166-2.2953-3.0167-2.2953-8.3941 0-5.771 3.1478-8.5581 3.1806-2.8198 9.4761-3.115l4.8529-.1967v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5416 2.5576l-3.0166-6.0333q5.4431-3.4429 11.837-3.4429 5.8037 0 8.8203 3.3446 3.0495 3.3117 3.0495 9.4105v24.526zm-7.5743-6.1644q2.3936 0 3.8035-2.1313 1.4428-2.1641 1.4428-5.7382v-3.0822l-2.6888.1312q-2.9838.1639-4.3937 1.705-1.3772 1.5411-1.3772 4.5906 0 4.5249 3.2134 4.5249z" />
            </g>
            {/* ./NAME GLOBAL REGIONS */}

            {/* Mines */}
            <Mines x={3080} y={1310} day={day} total={total} />
            {/* ./Mines */}
        </>
    );
};
