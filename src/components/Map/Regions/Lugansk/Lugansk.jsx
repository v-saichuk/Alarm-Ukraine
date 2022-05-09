import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';

import { Swativsky, SwativskyName } from './District/Swativsky';
import { Starobilsky, StarobilskyName } from './District/Starobilsky';
import { Severodonetsk, SeverodonetskName } from './District/Severodonetsk';
import { Shchastynsky, ShchastynskyName } from './District/Shchastynsky';
import { Alchevsk, AlchevskName } from './District/Alchevsk';
import { Lugansky, LuganskyName } from './District/Lugansky';
import { Rovenkovsky, RovenkovskyName } from './District/Rovenkovsky';
import { Dovzhansky, DovzhanskyName } from './District/Dovzhansky';
import {
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
    YELLOW,
} from '../../../../variables';
import { Mines } from '../../../Mines/Mines';
import { useMinesInfo } from '../../../../hooks/useMinesInfo';

export const Lugansk = () => {
    const regionLugansk = useSelectRegion('Луганська область');
    const regionStarobilsky = useSelectRegion('Луганська область', 'Старобільський район');
    const regionSwativsky = useSelectRegion('Луганська область', 'Сватівський район');
    const regionSeverodonetsk = useSelectRegion('Луганська область', 'Сєвєродонецький район');
    const regionShchastynsky = useSelectRegion('Луганська область', 'Щастинський район');
    const { day, total } = useMinesInfo('Луганська');
    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionLugansk)}
                stroke={DISTRICT_STROKE}
                strokeWidth={DISTRICT_STROKE_WIDTH}
                fillOpacity="1">
                <Swativsky color={useDistrictColor(regionSwativsky)} />
                <Starobilsky color={useDistrictColor(regionStarobilsky)} />
                <Severodonetsk color={useDistrictColor(regionSeverodonetsk)} />
                <Shchastynsky color={useDistrictColor(regionShchastynsky)} />
                <Alchevsk />
                <Lugansky />
                <Rovenkovsky />
                <Dovzhansky />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m4679.1 2026.2-.3221.3709-1.5936 2.7742.322 1.0321-.8692.081.2415.629 1.0623 1.0967-.66.5808-1.3038.097-1.175.9194-.5634-.129-.6277 1.5323-.499.2257-.8048-.065-.7244.5161-1.0462-1.9838-.6761-1.4839-.322-1.0322-1.0623-2.5-2.833-6.9355-.7886-2.0806-1.6741-.1613-7.1308-.4517-1.3843.4355-.048 1.8064-1.2233.081-5.7947-.048-3.9759.032-4.7966-.048-.7727.1129-11.799-.1129-1.3038 1.0644.2093.742-.1449.5483-.7405.3549-.1449.9677.7242 1.5484-1.2555-.048-4.1689.1129h-3.493l-.9174-.1129-4.8129.016-2.4949 2.887-.5634-.1934-.9175-1.0969-.9175-.6772-.7404-.081-2.5593-.016-.032 3.5321-1.5937.081-1.7061-.1129h-7.2918l-.064-.3064v-3.1612l-1.0623-.065-1.3682.1291-.9176-.081-3.7343-.032.048-7.1128-2.0926.048-.2896-.484-.5473-1.5321-1.336-6.5322-.3703-1.5161 2.1087-5.758.4184-.6774 1.1591-3.0322.4506-1.5161.9819-2.2419 1.4809-4.4839-.3702-.1291-1.4004.048-.097-.5646-.6922-.4032-.5311-.9192-.016-.8065-.4346-.016-.9819-2.1935-.3863.081-.7243 1.2097-.8693-.629-.1771 1.0484-1.1589-.048-.4507.7097-.5472.258-.7083-1.5001-.5794.065-.7566-.3548.8693-.871-1.143-.1291-.853-1.2096-.4025.1452-.6761-.3386-.7725.1773.7081-4.0966.2898-2.0323.4024-4.871.1771-.9838-.4346-3.3225-.2254-.8872-.3701-2.8063-.1771-.3871-.9818-.5-4.2657-.3225-.4989-.1452-5.9236-.484-6.5512-.2579-5.5049-.4355-1.2234-.1613-5.4728-.242-3.8632-.3386h-.6599l-4.7485-.2743-3.7183-.3225-.8852.048-2.8491-.3549-4.1852-.2902-.7886.2902-.3542.6613-.4989.1775-.982-.5968-1.0462-1.4678-.2415-.758-.032-1.1935.161-.742.5955-1.0967-2.0441-.9355.9657-.8386 1.4327-.5001-.2416-.4839-1.0301-1.0805-.7243-.3066-.5151.6774.2253.9195-.853.129-.5152-.9194 1.0141-.7097.016-.4677-1.0141-1.5-.3863.064-.8371-.8387-.4667-.887-.5312-.3549.4829-1.0645 1.1911-.1935.5473-.2903.1932-2.2258 1.8832-.3064-.4506-.9033.4989-.9194.032-.8224-.6599-.3065.7404-.9838-.7887-.5485.5794-.9354-.4667-.8388.7243-1.758.8693-.5806-.7888-.3226-.1449.4194-.7726.8225.1127.4356-1.3038 2.2418-.7727 1.7743-.3701.4354-.9981-.742-.3702.016-1.4326-.8226-1.1267-.3548.2897-.5-1.1912-1.3709 1.2878-1.5162 1.1589.2097 1.2556-1.2419.9979-1.2741-2.2856-.9356-.5152-.387 1.1108-3.6452.676-1.8548.9013-3.4194.7083-2.145-1.6096-.5162-.4508-.5807-.9335-.2579-.2093.3225-.8692-.1613-.6439.3063-.5634-.097-1.2394-.7419.1932-.4193-1.3038-.5161-.2898-.5806-.6921-.3711-.66.2097-.8852-.1452-.3381-.5322.161-.4677-1.014-.5483-.5474.7579-.9174-.2741-.081-.8871-.9176-.065-.3058-1.0806-2.0764.4032-1.3682-.2418-1.3844-.6129-.6277-.484-.7725-.048-.8371.3549-1.4809-.4999-.66-.5645-1.2233-.3711-1.2555-.5806-.1449.242-1.7706-.7258-3.0904-.9517-1.8189-.6935-1.3682-.7581-.322-.7902-.048-.9194.5794-1.1935.4186-1.4355-1.4809-.2418-.4828.2095-1.7869.1452-2.189-.1936-1.1589-.2257.1127-.484.821-.8869.2576-.9195-3.4447.097-1.175-.032-3.3481.1452-.4668.6451-.7887.1614-2.8009-1.6937-2.5593-1.1289-.2091-.2743-1.4166-.2257-1.0945-.5806-1.159-.5001.322-1.0322-1.1428-1.2581-.2899-.9194.6922-.7579.2898-1.1614.9013-.5161.1288-.9192 1.3682-.048.5151-1.3065-.9176-.6451-.048-.8226.8208-1.6935.081-.7903.4829-.3388-.2736-.5968-1.1428-.8226.032-.6613-.7887-.4999-.4509-.9515-.9174-.5807-.6116-1.1291-.7083-.7418.1449-1.0646-.6116-.5806-.1449-.6613-.9659-1.0806.1771-.3872-.1932-1.1773.3381-1.0645-.4506-.5967-.081-1.2097-.1127-1.5645.3218-.4032.2093-1.4032-.2093-.6452.322-1.5484-.4184-.5968-.1127-.9353-.6278-1.3226-.6117-.5808-.6599-1.2096-.6922-.2903-1.1429-1.258-.6759-.2097-1.2235-.742-9.3681-.8708-2.3983-.1613-7.4205-.5968-5.7947-.5001-9.5935-.9677-2.3983-.1613.081-.5806-.338-.8549.5151-1.129-.8369-.7903.016-.5806 1.143-.7581-.4026-.6129.1127-.7902.4507-.5806.8532-.4356.1288-.4354-.2093-1.0483-.6761-.3065-.1288-.6129-.5152-.3709-.161-1.0969.2896-1.1128.66-.355.4828-1.3064.9015-.9192 1.3038-.5-.2415-.6935-.2091-2.0968-.7083.1452-.5956-4.0807-.048-.4031-.1932-2.1775 2.8975-.4193.1769-.1936 2.8814-.3547-.1449-1.7098 1.4165-.3709.8852-.5483-.6278-.5485.3864-.6452 1.0301.5001.6439.6129.2898-.6451-1.5614-1.1613 1.7705-1.0162-.5472-1.4678 4.6197-.7901-.5473-1.0324-.676-.2902-1.2877-.8549-1.1106.081-.2415-1.6614-.6922-1.016-.2413-.8388-.3704-1.3225-.6116.097-3.7988-.6613-.9175 1.5807-1.5291-5.0806-.6438-.8226-.6278-1.7741.4024-1.3226-.1933-1.1291-.016-1.4838.467-2.5001-.2737-.629.081-1.016.2576-.4677-.081-.9678-.7083-1.3226-.3381-2.2257-.7564-2.4838.6116-1.0485-.4991-1.887.2415-.6774-.097-1.5483-2.7042 1.1935-1.3521.4838-1.2233.6452-3.348.9838.5795 2.0967-2.6237 1.0163-2.7687.9999-.7082-.4032-1.2233-4.371-.8049-.4677-2.5754-.2902-.9174.7417-.7244.355-.7566-.355-1.658.6452-.8208 1.0001-.8531-.016-.5312-1-.4345-.2257-6.0846-5.3064-.8531-.7904 1.0785-1.6612 1.014-1.9032-6.358-3.6129-1.5454-.9193.8532-.4839 1.1589.3387 1.1106-.2581.821.984.3542-.3227-.4186-.8386-.3702-1.7904.064-2.2257-1.1911-1.5162 1.8028-1.645.8852-.984.9659-.2095.097-.7742-.097-.7259.064-1.5645.8048-.8709.9818-.3549-2.5754-3.3064-4.7646-5.6289-1.7062-2-.7082.4354-1.4809-2.0482.6599-.3388-1.3038-1.5 1.4165-.3386-.4023-3.1613-.5473-5.2096-.4186-3.1935-.4345-3.4838-.016-1.629-.2094-.8871-.4506-4.4193-.9818-8.129-.7083-6.2095-2.2053.2258-6.7926.9838-.1449-.064-.8209-7.258.048-.1773 1.8832-.1613 1.4971-.7258-.064-.7259 1.7222-.3063 1.996-.1936.1932 1.2419 1.8028-.1452-.048-.5806 1.5775.097-.2093-1.2097.081-.8064.4345-.887 1.8028.016.3864-.3386 2.2534-.065.7566-.129-.3058-2.9677-.5313-3.4677.3542-.4193 1.7062.016 1.4648-.3871 1.8672-.1291.6922.4838.998-.6935 1.3359-.1936-.3541-.9999-.9658.016-.8208-.3711 1.5451-2.6451.2737-.7579.1449-3.3387-1.9476-1.5-.8371-1 .1932-.6128 5.3439-.6613-.5311-5.8387-.8369-1.9354-.9176-.5968-3.5091-.4678-1.8994-.387-2.2212.081-1.1911-.2097-.2093-.5322-1.5292-1.8548-3.1871-2.9033.322-1.6289.6116-1.8548.7888-2.0484 1.1589-3.3871 2.0443-.2742-.5956-4.7095-.7726-6.4193.1769-.5485 1.497-.1129 8.5795-1.1453.3701-1.129-.2574-.8064-.322-3.1613-.5956-4.0322-4.9415.6613-5.9718.871-.4024-3.1451-.7566-1.371-1.8349-2.129-.3381-.629-10.125 1.4193-.064-.5645.6278-1.1128.064-1.1774.2897-.8871-.032-.8388.4991-.8064.016-1.9355.6116-.5161-.064-7.9675-.048-2.9678-.097-.9676.032-2.5161v-6.0484l.064-3.2257-.081-4.1936-.1288-2.0161.016-1.4837-1.1589.8547-1.014.4033-2.2053 1.1612-3.5091 1.0967-1.0301.097-1.3682-.2258-.9496-.3386-1.1591.016-2.5593-.5645-1.1106-.3549-1.7545.3872-2.0926-.1775-1.6417-.6613-1.0303-.129-.6116.629-.6439 2.0806-1.2072.9678-.8854-.7742-.9013-.3549-1.6741.032-.9657-.6129-.1449-1.1613-1.0784-.6935-1.2072-.097-3.0746-.7258-.3862-.2741-.1449-1.0646-.4024-.5484-1.4809-.1452-1.7545.113-1.3199.4517-3.2515.5483-1.7544-1.0162-.6278-.048-.9337.5485-1.4809 1.3065-.3379.5483-.2898 1.758-1.3039 1.7741-1.5612-.8224.161-.5646.6116-.8225.5153-.016-.2416-1.4517-.7726.1936-.9174-.1452-.66.5161-1.2555-.1774-.2737-.9516-.7888-.9355.048-.5967-.4828-.3709.1288-.5807-.9337-.5806-.7243.081-.7405-.7579-.4506-.7581.1288-.5484 1.0623-1.8065 4.8612-8.4677.515-.1773 1.1106.7904.8532.4354 2.9778 1.7903 1.1591.5645-.3865-2.6452 1.4166-1.7257-1.5615-1.4516-.3218-1.516.5311-1.0162 1.159-.6291 4.008-1.3548 2.3339-.5484 3.7667.065.9174-.3549-.161-2.3709-.7564-1.9839-1.2716-2.9515-1.5131-3.3548-2.2375-6.0645-.8369-2.1289-.4669-.5967-4.5714-6.7581-.338-.7419 1.996-.9838.5473-.5001.8692-8.1611.2575-1.758.322-3.3548 2.0926-7.0644 2.2051-8.7581-.5795-4.8385-.1932-.3388-3.7665.5968-4.2011-1.4192-1.9799-.1452.032.4676-.5472 3.129-.3542 6.0806-7.1791-.8065-8.5633-.871-1.2555-1.4676-4.5392-.6774.3381-.4999-.4668-.7259-.1288-1.0323-.6921-.3548-1.7867 1.2258-.982.1613-4.7163-1.8226-2.0924-1.4999-.9498-1.0001-2.9938-1.8064-1.2073-1.3225-1.7546-1.2742 2.4951-2.3064.048-.1936-2.3822-3.258 3.0905-2.3063.6599-1.3387.7727-.3872.8692-.7258 5.5533-2.0483-1.9155-3.4354-1.1911-2.2743-.8049.3065-.193-.629 1.4324-.3872 1.3843-.9837-.081-.5323.9498-.6774 1.2072-.4033.064.5969 1.175-.6451-1.1106-1.0485-1.2394-1.5967-1.658.6452-.338.3709-2.2536 1.1128-1.8188.3388-4.6036 1.016-.9818.032.064-2.9192-2.2375-.8226-.7244-.1291-1.4326-.7097.3381-4.3386-.6599-1.6934-1.5132-3.3226 2.6238-.5484 2.5271-.9355 1.2716-.7258 1.8994-.3225-.5151-1.3064.5795-.4195 2.4466-.887 1.1752-.1613-3.3964-4.3709 3.9275-3.0323 3.6217-.9838 2.6881-.081.821-.242 3.1066-.6613 1.5775-1.0322-1.0464-1.7903-1.7384-3.6774.161-2.0321-.9336-.081-2.2212-.7903-3.5252-1.0806h-1.6098l-4.2171-.9839-4.6681-.742.1772-1.8387-.5795-.1129.2574-.8387-.2091-.6452-1.3843-3.016.7243-1.0645-.1449-.2258.9659-2.387.2252-1.2581.7405-.3871.032-1.1613-.3862-2.0484.4506-3.3546.6922-3.5646.2252-2.3709.4347-2.6177.9979-7.8112.161-2.1451-4.0402-4.7806-.4346-.6935-.676-.086.2093-.658.3701-5.0048.2093-1.8951-1.3843-.3065.2575-4.1564-8.3541.6162.5795-4.8887.3703-1.5516-.1449-.8241.6599-5.8.3543-4.2338-.7405-.7016-1.3843-.7467-1.5131-.4113.3864-.9678 1.0462-1.037.7404-1.6355-.322-.6435-.5472-2.0274.9336-2.8161.3219-2.3887 5.9396.371 4.3782.3274 2.2053-2.3274 6.197-3.8661 2.2214-3.0902.3541-2.5194-10.785-.5242.1771-1.0919 1.1106-2.7032 2.0282-4.6676.5634-1.7484.5311.171.8532.9822 1.1267.2548 1.8671 1.1081 1.7225.5403-.1288-1.4064 3.2193.092 2.35.1678 1.996.3822.161-1.0064-.4829-1.3951-1.2235-1-2.2212-2.5145-.8692-1.8193-.2253-1.2097.016-1.4226 2.028.045.1449-.3758.3381-3.0322.1931-3.5451 4.668-.5242 3.4447.2839-.1288-1.3887v-2.1371l1.5453-2.1419.097-.2806 3.6862-.7532.3218-.3065-.2413-.7564-.483-.4017-.6761-1.4306-.8852-2.7919 2.3339-2.4257 4.0564-1.2032 1.2072-.2629 4.4587-1.3178 3.1066-1.0032.3703-.2451-1.9477-1.4339-.5794-.5758-.3542.9645-.66.2887-1.513-1.4935.8852-.6758.5151-.8177-.3379-.5468-1.481-.7935-1.4968-2.1161.2413-.7903-2.3339-.082.821-.6113-.097-1.7145-.8049-.5984.821-.3451-.2576-.7452-.016-3.337-1.8672.076-2.0121-2.0903 4.9738-2.3951-.2253-2.75-1.7063-.5177-1.7062.2661-1.7544.039-1.6903-.9145-4.2011 2.9193-1.0624-.9822-2.9456-3.0435-2.2375-4.9612.048-.4694 2.4146-6.3176 2.0602-5.0016 2.2214-3.4596.6116.6193.2255.5871.7243 3.9371.4346.061 1.0784 1.0451 2.8008-.3209 2.4305-1.3774.3059-.3291.2736-3.1693.6921-.4709 2.8331-2.4129-.1449-.8355 3.5574-1.7016.3862-1.779 3.8471-.2709.6116-3.3-1.6739-.6387-.4992.098-1.8349-.8355-1.3843-1.7903-1.1267-1.1725-5.4567-4.3725 2.6719-8.908-.2252-1.1967 6.1809-.6258 1.7547-.034 1.7222.7452 3.5895.4983 1.2877-.014 1.1752-.4532.7081-.5194 3.2192-2.9467.016-.2758-2.9777-3.287-3.7022-4.1774-2.1248-2.958-3.5733-4.5467-1.2877-2.7822-.6439-1.7645-1.8029-2.3613 1.2233-2.0387.8854-1.7532 1.5131-2.5725.6922-.7371 1.8349-2.271.8371-.6096 5.4888-2.4097 4.1852-1.8886 7.8549-3.2677.2898 1.5983.3379 1.0484.4348 2.35-.5634 2.8128.032.4952 1.674-1.1161.6599-.6694-.4023-.5725 1.69-.971.3702.179 4.3622-2.9677 3.2032-1.8128-.2737-.9-1.7544-2.9597.4828-.5758 1.5936-.7903.6278-.027 6.503-3.2064-.5153-1.779-.1288-1.1677 5.006-3.2613 2.0121-.8677-.2415-.5678-1.0301-1.037.048-1.1726-.4187-.8951-1.2233-.4791-.8209-.9354-.6278-1.7645-.2091-1.1452.081-.9709-.7566-.4339-.4186-1.0306-.4829-.4371-.4023-1.1371-1.2877-2.408-1.4487-3.0451.3542-.7742.1288-1.3839-.081-1.5774-.2092-.4871.048-2.1015-.097-1.5968-1.0141-2.158.3542-3.9354-.161-1.3113-1.481-8.0241.064-.6032 3.4769.4354 2.6399.5001 4.0724.5596 2.1568.4065 7.0664 1.0209.8692.05 5.4246-.3854 2.35-1.292 1.7062-1.1387 1.2555-1.6483 1.175-1.3677.3381-.1758 3.0583-.4146 4.2013 1.1307.3218 3.279.5473 3.3467.1288 1.1919-.048 3.4758.4669-.1194.2413.7919 1.0142 1.7984.1769 1.1112.7083 1.571 1.1108 2.0983 1.1428 1.9565.4506 4.237.1771 2.7903-.5955 3.0096-.5152.9419.1771 1.0145 5.1025 2.7177 3.0746 1.4323 4.3299 2.1758 2.9938 2.4144 1.996 1.6855 2.8653-5.3564 1.5612-2.8241.982.1887 4.1206 1.1532 4.4266 1.0871-1.0302 4.8451 3.4447.032.4023 2.3355 1.0303.089.048 3.0564 1.2716 2.6387.354-.068 4.9577.1307 3.5896 1.5161 1.336.479.4507-.1629 3.686-1.8387 4.7968-2.5467 2.1248-1.0645 3.4928-2.1741 2.4788.1903 2.3502.2887.2897.1419 2.8813.2855.9979.3532 1.835 1.5049 2.0121 1.8322 3.0906 3.0274.8852.9709.4829.1065 1.6902-2.1903.7566-.7177 1.4004-1.9822 1.368-1.5371 2.6399-.3758.837-.5581-.032-1.6822-.4023-2.3209-.3059-2.7581-.2093-.7225.5313-5.1484.2735-.8177.9981-.1613 1.0301.621 1.8994 2.0064.4025-.113.8369.5581.4989.971-.2574 1.1048 1.996 1.5113.8048.7757.2897 1.1742.7887.2645.4024 1.4645-1.5452.7726-1.1591.8806.1449.2129-1.2877 1.3549-.7565 1.0822-1.9477 2.1677-.66.5645-.8852 1.3 1.5935 8.7886v1.3967l.483.8774 7.9193 3.2581.3543.8371.2735 1.1177 1.3038 4.0435.6278 2.6128.4025.7516 1.6418 1.679.998 1.2613.2897-.061 4.1368.3307 1.8833.2209 2.5915 4.5661.66 1.0129 2.5593 1.6661 1.336-2.0822 2.1248.5838 5.2956 1.2451 2.0604 1.271 1.9315 3.4193.8371.4468.9818-.5565.4669.8758.6761.1452 1.1911-.8032.5473-.7161.676.7048 1.0623.4839 2.1087-.1597.161.4806.9174-.6242.4669-1.0467 1.0301-.015.6278.5839.7082-.3306.499.2145.5472-.8113.7888.2968.5473-.4065 1.0785.1178.5634.2968.4989 1.5177 1.014 1.1903.4187 1.15.6921.3484.5956-.3049.7886.016.5635.4775-.6439 1.1596-.8692-.1822-.4668.6016.1449.7564-.7725 1.0016-.6277.1226-.4025.7436.1932.9241.6116.6.9176.1226.515 1.8532.1288 1.7-.6599.4726.161.6435.5794.3178.081.5774-.676 1.0564-1.0623-.1291-.1932.7468.4508 1.2.2574 1.9725.7244.2887 1.3843 1.2274.2898.5113-.6921.5468.8369 1.279.4025 1.8693.4828.3758 1.3682-.079.2092.4403-.4185.9855.821 1.5467.9818-.2822-.016-.7033 1.4004-.5322 1.2716.5097 1.4971 1.408 2.2212-1.6887 2.0281-1.7983 1.0786-.5145 3.67-.8033h.3701l4.8451-2.7758.4668-.3516 3.8309-2.2048.6439-.25 2.5754-.4823.982.2242 4.1206 1.7468 4.2978.8758.8852-1.3597 1.4487-1.1403 3.171-2.2129.8854-.7032 1.7545-1.1209 2.5593-1.8274.8209-.7339 1.6096-2.3193 1.0464-2.1064 2.7203-5.2612 5.1831-4.4484.2574-.1194 4.6519-4.1144 2.7848-2.3322.4345.042 2.0926 1.4919 1.69 4.7 1.3683 1.3387.3381.037 1.5773 3.6709.2898.3597 2.2052 3.8951.9014.8983-.097.5629 1.7223 3.1-.048 1.1661.1932 2.8322.048 3.5596.097 2.0178.6278 1.1306-.032 1.6129-.5312.8274.8208.8709.2737.5678 1.3843 1.8048.8049 1.6354.048.6775.6921 2.666 1.1912 1.9371.7565 2.2855 2.2534 2.4031 1.1268.921.5633.1887 1.9638.044 1.1591 1.3887 1.7383 3.4047.338.4694 1.8993.3016 2.1731.4806 2.1892.2904 4.7805 1.6532 6.1812 2.279 3.525 1.1967 1.9155.2597 1.6902.4016.3863-.053 5.1991-3.6161 3.2676-2.1951 2.2536-1.0436 3.9274-1.6096 3.1067-.4307-.1127.4839 1.336.3984h1.014l2.4306.3838.6921-.011 3.2354.3468 2.9296 1.129 5.4566 2.4806 1.3361.5323 4.1851 1.9387 2.7364.7483 4.8611 1.0597 4.3943.5452 3.5091.2871 1.175.1919 4.1691.4532-1.2717 1.6951-3.2997 3.8435-.2577.5033 1.0624 2.187 4.6841 8.9305 1.175 3.7742 1.1751 3.9774 1.8672 6.1466.2253.979 1.5775 5.4742.6921 2.929 2.2535 3.3918 3.4125 4.8096 2.8491.5049 4.2977.6822 2.2375 2.5855.5633.2645 4.507-.5742 2.7846 1 .064.1468 6.4386 2.4516 3.8953 4.3612 2.2214 2.6709 5.4244 5.7048 3.8631 3.8338.2577-.6597 7.8711-2.2322 1.2717.2661 4.8932.9758 1.4487.3758 5.8913.5081.5312-.011 11.042-5.8628.6599-.7871 4.2496-8.9757 4.3138-.6209 3.7343-.6178 3.2998-.3935 5.2475-.7532.3057-.1887 1.7386-.1404 4.6678-.671 2.7203-.5112 1.8994-.142 1.8833 3.2387 4.5231-1.7936.1932-.014 4.0563-1.5758 1.7867-.8338 3.686-1.4516 4.3301-1.7855 1.1589 8.716 2.0926 2.95 1.6256 2.4 2.5272 3.4564 1.6741 2.1274-9.3521 4.795-6.9858 4.2338-4.5553 2.6419-2.5433 1.5629-4.3943 2.6048-1.0624.4952-.6922.6435-4.8449 2.8855-.4185 1.3935.5151 2.2516.048 1.3258.5955 3.658-.6921 4.2677-.66 2.966-.8854 4.9967.032.6678-.9979 4.5064-.1288 1.0516 4.668 3.5531 1.0623 1.3387 1.7867 2.7129 1.3521 2.4742.8693.8257 1.6256 3.7081 1.1108 2.287.016.2645 5.5049 5.8951 1.4487 1.1694 1.9477 2.0935 1.1589 1.379 3.2676 1.0854 1.5775.621 2.495 1.1452.2735.029 3.3159 2.3694-.4184.4677.6438.4839.4185-.3871 1.0301 1.2581-.5473 1.1128 1.6902 2.4193 1.1267 1.2582 1.2878-.097 1.2555 1.5966.4667.3872 2.1892 1.1613 2.5593 1.2096-1.2072 3.9839-.3703.7258-.2091 1.5805-1.0625 4.7903-.2735 2.9999-.499 1.6291-1.1108 1.5967.5956.3226-.081.9515.4828 7.5807 1.5613 1.0322 4.8934 3.758 2.3017 1.8547 2.3985 1.6775-1.6419 4.2257-.9015.871-.3862 1.2097-.8693-.032-1.4324 1.3226-5.2153 1.4839-2.9296.4676-1.7706-.2419-6.0362-.5323-2.8812-.3063-3.7184 3.6128-.7725 1.6773-3.0746 6.2097-.7403.7096-3.1711 2.6291-2.7202 4.0482-1.1429 1.8872-.5151.5806-2.7203.629-9.513 2.258-2.7525 4.4031-2.688 3.3387-2.1892 3.8064-1.2394 1.2257-5.0703 7.258-1.7708 2.8226-3.171 6.8386-2.865 5.0807-.7083 1.4353-1.4326 2.3227-.6117.7096.9659 3.7258.064 1.7579-1.1267 5.1935-4.4265-.3063-2.9295-.081-3.6862-1.1774-3.8631-1.5-.4185-.081-4.5714.7742-4.1368.4839-1.9316.4515-3.3479.5324-.2093-.1129-1.8672.4031-.9337-.1613-1.1267-.9676-.5794.2902-1.4005.1936-1.497 1.0967-2.672 2.6774-2.7846 2.3549-2.9457 1.6612-2.3017-.4354-4.3299-.2904-.7566-.2741-4.0564-.871-2.6076-.8549-.4345-.3548-4.9579-.9839-2.4788 1.6291-3.2193 2.2418.4186.484.6278.1613.9174.984.7566-.5645.7082.9192.032.7581-1.0462.1936.5634 1.2903-1.6258 1.4355.097 1.1612-.161.9677-.6278.7903-.2575 1.3871.2414.6774 1.0786.4193-1.9638 3.9677-1.8351 1.0485 3.155 4.3064 1.7545-.7581 1.0301-.9677 1.1911-.8065-.2575-.2419.5795-.9838.9657.1129.9015-.7418 1.336.6936.5633 1.1451.4346.3386.1771 1.2419.5151.032.8048 1.1291.2093.6129.7244.5806.1449 1.0161-.2736.5967.3541.5161 1.0303.7258 1.2233-.064-.161 1.3064.3862.3227.7727-.4677-.064-.5163.5635-.3547.8047-1.2742 2.2697-1.3548.4667-.5806.6761-.1775.9497.2258.4346.8711-.9015.6772-.3057.629.161 1.3387.7405.7097 1.7063.242-.032.9838.5794.5646-.3059.6129-.6599.258.048.7581.4186.3226.6921-.5485.5634.097.1449.8065-.7403.5967.6761 1.4194.6759.1129.1288.4516-.6922.7097.8854.7742.9014 1.3871.7725-.2581.7244.2097.1771.629-1.0784.8709-.2898 2.3387.322 1.0967.3379.032.5795.8388.5633-.081.6922.6935-.032.4516-.7244 1.4678-.048.6612.2575 1.2097-.2575.5483-1.1107.5645.515 1.4033 1.2396 1.3064.5634 1.0644 1.4324.2098.982-.2582.5311.6452-.2254.629.7083.6131.4669-.5002.2252-.9999 1.2395-.1774 1.1429.4515.8369 1.0969.6922.2257.5955 1.0807.821-.081.032.9676.9337.4195.5633 1.2419-.4508.5645-.8691.4354-.3381.4678-.016.7418.7727.3711.2898.6129.8047.5483.1288.629.4828.2582-.081 1.3548.8047-.1452.6278-.5645.3381-1.2258.4184-.5969.064-1.1773-.3701-.742-.1932-1.3548.6116-.6452.6278-.2741.5956.2581.4506.6291.821-.742 1.9315 5.016 1.0624.081.6118-.2097 3.2835-.4032 1.0464-.1936 13.151-1.4193.8208 1.1451.7888.4194.4989.5484.8693.2097-.016.4677 1.4165 1.5161.6278 1.7096.8369 1.2903.5957.5645 1.014.4677.5473.6129 2.4627.5647 7.5815 1.5482.161-.4999 1.8352-8.8547.4667-1.7743.4024-2.1773 2.5754-.242h.982l.4345-.9353.5473-.3872-.097-.8226-.4346-.6936.7727-.097.676-.5967 1.0945-.4518-.4184-.7742.5472-.3709.821-.048.7242-.4031.1932.8063 1.2877-.4354.8693.2904.5633 1.3548.7727.258 1.674-.2096 1.5614.7095-.7727 2 2.1087 6.9839.8691 2.645.9498 2.3549 1.996 1.3064-3.5413 3.9839-.2414.1613-5.5856 6.3387-2.6881 3.1451-1.4325 1.516-2.6559 3.113-2.9296 3.1774-7.0986 7.887-1.5612 1.8386-.6278-.097-.9497.258-.7083-.2096-1.3521-.9516-1.1106-.2419-.6439.2741-1.8027-.129-6.2617-3.7419-1.2555-.8226-9.2231-5.5805-6.6801-2.3225-1.3199-.4033-3.67-1.2742-2.157-.8547-.4989.048-.8532.7581-2.1086-1.0806-3.3802-1.8709-.5313-1.8064-1.2716.258-1.014.9839-.1288 1.0161-.9818.4838-.1449 1.5323.016 1.6934.5794.1452.9337.9517-.2737.7742-1.1428.5-.6761-.2581-.161-.5323-.7404-.1613-.3541.9356.5473 1.3387-.016.629-.6117.5322-1.2555 1.8225.016 1.9032 1.3521 2.4677.097 1.4516-.3864 1.5-.016.6775-.7405 1.3225-.081.629-.6599.7904-1.2716.3225-.5634.3549-.5633 1.1451-.7888.5484-.2253.5483.032.9356-.4669.4354-.3057.9838 1.4004.6935.1288 1.5485-.322.5322-.7727.4999-.9979-.016-1.7224-1.7096-1.3519.4193-.6922-.064 1.1589-1.0967.7727-.2257-.6922-.9517-.5311-.097-1.6742 1.5.5312.7097-.6761.5645-.853-.1452-.676.7903-.064 1.6774-.7083.016-.6761.3227-.161 1.1935.4668.5644-1.1911.4355-.4668.7903.3702 1.0645.7243-.3064.5313-.9678 1.1751.4678.016.5161.4989.9356.1932 1.6612-.7565.1129-.5956-.6452-.4508.2903-.177.9355-1.6902.629.1127 1.0322-.6277 1.742-.097.8548.998.9678-.8209 1.3064-1.1106-1.1774-.982.3871-1.0784.9032-.4668.8709.1449.7419-.3057.5484-.6439.4356.161.6129.6761.516.5955.113.016 1.2419-.2093.4031-.9497-.1452-.3541 1.1614-.515.8709.7243 1.3871.9013.4999.4187.5968.6919-.048.3221-.629.6277.129.032.7581.3541 1.371-.8047.3548-.2093.5162.5955.8709-.4023.629.032.6129.4023.758.5473.2743.5794.7419.081.6291-.4828.4677-.9981.2741-.9013.613-.161 1.5644-.2735.5-1.1752.8548-1.1106.5645-.5151.7742.5956 1.0322 1.6739-.5161.2576.3872-.1288 1.129-.3379.887.048.7581 1.4969 1.3548.1771.6613-1.8028.2742-.7888-.9516-.9175 1.258-.9335.5645-1.5132 1.2419-.5955 1.1936.5955 1.0806.2093 2.1775-.2737.6774-.7082.3709-.9174 1.129-.8371.4839-1.9799 1.5322-1.3038 1.2741-.7082.8711-.6278 1.0967-.7244 2.5806-.8369 1.4677.161 1.3065.7888.4677 1.3038-.065.5473.4517-.8047 1.1452.1769 1.8063.9176.3227 1.3038-1.0807.9013.7903-1.2555.8388.081 1.2741.7727.1614.032-.5484.6116-.2741.4829.6613.998.9192.081.7904.9335.1936 1.1428-.1291 1.9799-.5322 2.9619 1.0483 1.5773.2259 1.2074-.6291 1.8833.2257 1.1428-.1129.7243-.3549 1.32-1.1935 1.2233-.1613.5472.629.1288.9517-.016 1.5966.6117.1613 1.0623-.6612 1.1106-.3225 1.7546-.871.499-.5645.4506-1.2097.6761-.4517 2.8652-.3547 1.7384.064 1.0945.4515 1.3682 1.1774.5956 1.0001.6921.6613 1.3844.387 1.3199-.3064.7565-.4678 1.175-.3225.7244.6774-.032.8065-.6117.8547-.6921.4517.1288.4516 2.5915 1.2741 2.1409.6452 1.835 1.0483 1.2394 1.4194.9818 2.1452.1288 1.4193-.6439 1.8548.2737 1.7419.7405 1.5968.1127.629-.5151 1.9193.2094 1.7903 1.0301 2.3709.6277 2.1452-.032.9353.66 2.7258.5472 1.6453.048 1.6773-.3057.6613-1.0784.8871-1.2396.2096-1.1589-.8225-.9979.2257-.4508.5645-.1449 1.3871.2574 1.1292.064 2.5806-.3862 1.8064-.161 2.6774.081 1.0967.3057.7903.982 1.8548 1.69 1.6935 4.6841 2.6774 3.2998 2.5806 2.6399.9839.2735 1.0967-.6116.5-1.3842.242-.483.5322 1.0625 3.6612.354.9517 1.2877 1.5966 2.817 1.855.4506.6772.1932.9678-.1449 1.4194-.4184 1.0483-.8693 1.4355-.2415 1.3064.4669.8872 1.4164.387.8048.4354.4668.5323.1932.871-.499.9032-1.0784.4677-1.3038.3387-.4025 1 .9176.7259.9335.3225.8209 1.0968.064 1.387.6761 1.5484 1.336.871.8693.016 1.0784-.7419.354-.7097.322-1.8387.499-1.1128.6277-.5162.821.2097.3541.871-.3541 1.5967-1.2555 2.5322-.3703.4033-.1288.7419.4667 1.6451-.8692 1.8064.4989.129.1771.5484-.2896 1.4839.4828.2902.5312-.7097 1.3682.6131-.5634.6129.2897.3063 1.2394-.1613-.032.5001-.6117 1.629-.4023.6774-1.1267.3709-1.8994-.8547-.982.129-2.511.5806-.032 2.3225-4.1528 1.2419-4.4749 1.2097-2.1891.6612-3.187-.3063h-.9981l-3.9115.4838-.4989.2259-.097 1.4192-1.1589.1936.2576 2.7096.064 1.6774-.2415 3.0323 1.996.258 5.0864.1774 5.0865.081v2.4354l1.2716.5322.5472-.3225 1.7386.7258 1.1589 1.1451 1.497 1.871.048 1.5645.5474 1.9355.4185.064.2898 1.2096-.5313 1.5483-.3702.4679.064.774-.2898 1.0324 1.0303-.065.2896.5806.982-.629 1.336-.032.2091-.8065.6117-1.1774 1.819-1.371-1.2234-1.016.4991-.5.8047-.1129.4669-1.5484-.097-.7258.2896-.9838.9981-.3227.5634.3711.5472-.242.7727-.8065-.032-.6129.6116-.4677-.2898-.5483.66-.871-.1288-.8065.4989-.4032.6922.1775.1932.5161 1.674-.3065.5955-.6452.081-.6613 1.4165-.3547.2092-1.0322-.177-.7581.338-.4678 1.6258-1.0968.9979-.016 1.2394-.7419 1.0303.1452.048.4676.6439 1.226-.2092 1.7418-.064 3.0967.66 1.8064 1.3682 3.4194 1.1428 3.0483.1932-.016.9174 2.8065.4508 1.0322 1.0462.081.4668 1.3387-.8047.2258.7886 1.9032.048.4677.7404 1.3871.4346 1.0806-2.688 3.5-.9337 1.129.064 1.3225.2897 2.2097.322 3.3065-2.1731.4193-2.4305-.2904-3.3803-.6129-1.6901-.1614-5.1186-.6774-3.0102-.081-.3379 1.9516-.338 7.6127-.1449 1.8387-.2254-.016-.2093 5.5323-.016 2.0966-3.0099-.6129-1.5293.048-1.1267.5484-.2896-.1773-1.2877.5483-.821 4.258.2737 4.3549-.2093 2.5322-.3381 1.4998-.8369 1.9516.048.5968-.5313.484-.1127.7581-.7405.274-.1288 1.3871-.6922.5-.7887-.016-.7566.8548-.4989.2259-.7566 1.0322-.161 1.1935-.4669.242-.8852 1.3871-.6117.7418-1.3199.8226.8047 3.0644-1.0784 8.6612-.2576 2.9194-.1769-.016-9.2395 4.9354 2.7365 2.4354 1.5451.9678 2.8492 1.2096.032.1129 2.511.8709 3.5896 1.5.048 3.0806-5.843.1452-1.1911-.081-4.2816.064-1.497-.4676-.7888.5322-3.3962.016-2.9941.2097-1.4324-.048-5.843.1452-.66.1614.4506 1.5807.8049 2.3708.338.4355-.2897.6774.2575 1.7097.7726.7904-.081.6613.5956 1.1935.3542.3225.2574 1.1128.4025.081.9013 1.2096.5795.2097.4508.6775.4346-.032 1.0462 1.5484.8048.629.4668-.2097 1.3199.5-.6761 1.5.8049.5645.016.8065.4025 1.5484-.6118.097-.048 1.2742.3057.9194.5795-.242 1.2072.5162-.3218 1.3226-.4025.8547-.692.2904-.081.7742-.4026 1.2097.1932 1.1451.4346.5322-.3862.371.4184.5484-.3057.7258.4023.7095-.1288.3872 1.2555.7097.3864.9192-.016.5807-.4508.3065-.3862.8226.1449.4838-3.4286-.032-.8371.1936.081 2.1611 1.1591.8226-.048 1.6452-.5313.9677-.5795-.4516-.4989.016.048 1.0967-.9818 1.258.2896 1.8709-.7888.9517-.5794.9677-.4829.3871-.2254 1.2742.032 3.7096.1771 6.0484.097 8.3869-.4506.887-.4669.1291-1.7545-.1775-1.0301-.2741-.3864.3386-1.6096-.1934-.6116-.2743-1.5937-.2903-.5633.1935.1288 2.9194.032 6.5645-1.6258-.1291-.5312.6452-4.5231 6.8547-.161.048-5.36-.4676-2.4146-.2582-6.6477-.5967-3.5735-.3709-3.847-.2581-.6922-.113-1.9477-1.3871-1.3843-.3547-.7887-.032-.7403-.4838-1.0786.048-.9657-.2259-.7083.4032-.4184.629-1.1752.064-1.3038-.129-2.189.1452-3.2676-.032-2.1087-.097-4.6841.032-1.175 1.2259-3.2998 1.7741-2.0443 1.629-1.9155-3.0483-.6921.5967-3.0905 2.3548-2.6881-3.3224-5.7625-6.9033-2.7043-3.3064-.2574-.4515-1.4004.5967-.8693-.2902-1.014.032-.66.3387-1.0945 1.2903-1.0625.081-1.529 1.2903-.7727-.2903.3541-.4355-.2897-.7581-.6599-.016-.4668.3388"></path>
            </g>
            {/* ./MAP REGIONS */}

            {/* NAME REGIONS */}
            {regionSwativsky && <SwativskyName />}
            {regionStarobilsky && <StarobilskyName />}
            {regionSeverodonetsk && <SeverodonetskName />}
            {regionShchastynsky && <ShchastynskyName />}
            {/* <AlchevskName />
            <LuganskyName />
            <RovenkovskyName />
            <DovzhanskyName /> */}
            {/* ./NAME REGIONS */}

            {/* NAME GLOBAL REGIONS */}
            <g
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth="1.6113"
                transform="scale(.999 1.001)"
                fill={regionLugansk ? '#fff' : YELLOW}
                fillOpacity=".95294"
                opacity=".85"
                aria-label="Луганська">
                <path d="m4416.3 1617h-8.9187v-40.101h-7.1809q-1.4755 16.591-2.951 27.412-.9837 6.9186-3.574 10.132-2.5576 3.2134-6.853 3.2134-2.656 0-4.361-.7214v-7.3776q.9837.3935 2.4264.3935 1.8362 0 2.7871-2.8855.9837-2.8855 2.1969-12.952 1.246-10.066 2.5903-25.051h23.838z" />
                <path d="m4420.5 1580.5h9.0499l5.0495 20.624q.7542 2.7543 1.2132 7.7055h.1968q.033-.7869.2951-2.7871.2623-2.0329.4262-3.1805.164-1.1477 4.525-22.362h9.181l-10.46 39.151q-1.9018 7.2136-5.0496 10.361t-8.3941 3.1478q-2.5903 0-4.6233-.5574v-7.3121q1.3444.3935 3.0166.3935 4.3938 0 5.771-5.7709l.623-2.2953z" />
                <path d="m4473.2 1580.5v7.0497h-10.263v29.478h-8.722v-36.527z" opacity=".85" />
                <path d="m4496 1617-1.7378-4.984h-.1968q-1.9346 3.2134-4.0003 4.4266t-5.2135 1.2132q-4.0331 0-6.3611-3.0166-2.2953-3.0167-2.2953-8.3941 0-5.771 3.1478-8.5581 3.1806-2.8199 9.4761-3.115l4.8529-.1967v-2.6231q0-5.1152-4.4266-5.1152-3.279 0-7.5416 2.5576l-3.0166-6.0333q5.443-3.4429 11.837-3.4429 5.8037 0 8.8203 3.3446 3.0494 3.3117 3.0494 9.4105v24.526zm-7.5744-6.1644q2.3937 0 3.8036-2.1313 1.4428-2.1641 1.4428-5.7382v-3.0822l-2.6888.1312q-2.9838.1639-4.3938 1.705-1.3771 1.5411-1.3771 4.5906 0 4.5249 3.2133 4.5249z" />
                <path d="m4518.2 1580.5v14.231h9.8696v-14.231h8.7876v36.527h-8.7876v-15.313h-9.8696v15.313h-8.7219v-36.527z" />
                <path d="m4556.2 1617.7q-6.5251 0-9.9352-4.7545-3.4101-4.7544-3.4101-13.968 0-9.64 3.2134-14.394 3.2462-4.7545 10.001-4.7545 2.0329 0 4.2626.5902t4.0003 1.7051l-2.492 6.7874q-2.7215-1.6067-4.82-1.6067-2.7871 0-4.0331 2.9183-1.2132 2.8854-1.2132 8.6892 0 5.6725 1.2132 8.4924 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2952v7.6727q-3.4429 2.1313-7.6072 2.1313z" />
                <path d="m4577.8 1594.8h3.0822q7.312 0 10.755 2.6559 3.4757 2.656 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.722zm8.3285 10.886q0-2.3281-1.41-3.3446-1.3771-1.0164-4.4265-1.0164h-2.492v9.181h2.6231q2.7215 0 4.1971-1.082 1.5083-1.1149 1.5083-3.738z" />
                <path d="m4618.9 1580.5h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
                <path d="m4650.3 1617-1.7378-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266-2.0658 1.2132-5.2136 1.2132-4.0331 0-6.3611-3.0166-2.2953-3.0167-2.2953-8.3941 0-5.771 3.1478-8.5581 3.1806-2.8199 9.4762-3.115l4.8528-.1967v-2.6231q0-5.1152-4.4266-5.1152-3.2789 0-7.5415 2.5576l-3.0167-6.0333q5.4431-3.4429 11.837-3.4429 5.8037 0 8.8204 3.3446 3.0494 3.3117 3.0494 9.4105v24.526zm-7.5743-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.1312q-2.9839.1639-4.3938 1.705-1.3772 1.5411-1.3772 4.5906 0 4.5249 3.2134 4.5249z" />
            </g>
            {/* ./NAME GLOBAL REGIONS */}

            {/* Mines */}
            <Mines x={4420} y={1640} day={day} total={total} />
            {/* ./Mines */}
        </>
    );
};
