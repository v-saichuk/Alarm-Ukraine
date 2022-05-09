import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';

import { Golovanivsky, GolovanivskyName } from './District/Golovanivsky';
import { Novoukrainsky, NovoukrainskyName } from './District/Novoukrainsky';
import { Kropyvnytskyi, KropyvnytskyiName } from './District/Kropyvnytskyi';
import { Oleksandrivsky, OleksandrivskyName } from './District/Oleksandrivsky';
import {
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
    YELLOW,
} from '../../../../variables';
import { Mines } from '../../../Mines/Mines';
import { useMinesInfo } from '../../../../hooks/useMinesInfo';

export const Kirovograd = () => {
    const regionKirovograd = useSelectRegion('Кіровоградська область');
    const regionKropyvnytskyi = useSelectRegion('Кіровоградська область', 'Кропивницький район');
    const regionGolovanivsky = useSelectRegion('Кіровоградська область', 'Голованівський район');
    const regionOleksandrivsky = useSelectRegion(
        'Кіровоградська область',
        'Олександрійський район',
    );
    const regionNovoukrainsky = useSelectRegion('Кіровоградська область', 'Новоукраїнський район');
    const { day, total } = useMinesInfo('Кіровоградська');
    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionKirovograd)}
                stroke={DISTRICT_STROKE}
                strokeWidth={DISTRICT_STROKE_WIDTH}
                fillOpacity="1">
                <Golovanivsky color={useDistrictColor(regionGolovanivsky)} />
                <Novoukrainsky color={useDistrictColor(regionNovoukrainsky)} />
                <Kropyvnytskyi color={useDistrictColor(regionKropyvnytskyi)} />
                <Oleksandrivsky color={useDistrictColor(regionOleksandrivsky)} />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m2666.1 2050.6-1.8189-9.2419 10.752-2.1773.2736-.5322-.2897-2.0161-.9336-1.0646-1.1428-1.8064-.3059-1.0967-.5634.016-.9496-3.8547 1.6257-.484-.7244-3.6128.1449-2.3064 7.839-.3065.7888-.081-.4187-2.0645-.2574-.2095-.161-1.2419-.499-1.6453-.064-5.9515-.2254-1.4999-.5472-1.4839-.4507-.6613-1.0785-3.5.4508-1.1451-.2254-1.8225-1.3038.2581-4.346 1.0644-.1449-.5644-.9336-6.0484-.1288-2.0968-.1932-.081-1.6097-9.9675-5.4727 1.016-.4184-.3064-1.6581.1775-2.3178.4838-1.5131-.2258.1288 1.3225-4.4265 1.0162-.499-.129-.4186-1.9516-1.2877.6935.5473.5645-.4024.742-.8692.3547-.048.6613-.5312.1291-.3058.629.2736.8226-.9979.7097-.4669.8063-.7886-.4193-1.5292.1614-1.1268.5967-.322-1.1451-1.5451-9.2096-1.5775-9.2902-1.2395-7.5805-1.5934-9.0321 3.1549-.6291 11.139-2.0483-.6117-3.1451-.1127-1.1453-.5796-2.9999-1.5774-8.7417-1.2877-7.6291-7.0019 1.2098-1.9155.3709-1.4326.1129-1.9477.2903-2.173.4356-.8047.3225-3.9759.7096-.7888-3.6611h-.1127l-1.0623-5.3871-.6277.5806-.4669-.2097-.016-1.0322.5796-.5645-.1932-.387-1.1267.016-7.5977 1.5805-2.5432.4193-.5634-3.8225-.7082.1452-.821-4.0645-1.4324.2581-.2254-.2419-3.2998.6451-1.1589.5324-6.4225 1.1935-1.0784.016.692 3.0967-.853.097-.1449 1.0967.2737.2098.4989 4.6772-1.9315.6613-1.8994.3226.4184 2.387-.4345.2098-2.817-5.4355-2.3339.5001-2.5593.4677.4023 2 2.3662 12.984-3.348.5967-7.1629-.2097-.483.032.4669 2.4031-.4025 1.7904-.5473 1.0806-1.2877 1.2903-2.7042.7904-.6278-2.9356-.5633-3.0321-3.6217.6451-1.1267.1291.5473-5.4193.4345-1.4194.6922-.9838 5.843-1.6614-.4667-2.6451-1.3039-6.8224-1.3199-7.2419-4.3783.8065-13.859 2.629.6278 3.6451-4.3621.8871-2.3019.4516-.9013-4.5-.6761-3.8063-.5794-.8065-1.0786.016-.8208-.4677-.821 2.8065-1.3682 1.2096-.1127.5484-.8531.629-.7083-.081-.6278.4032-1.0945-.2418-1.1106.1936-.837-.1291-1.6418.3709-.9337.5806-.6599.1613-.2575.5484-.7726.016-.4508.3227-.8852-.032-.306-1.7581-1.014-7.8546-4.0563 1.5967-10.752 3.8386-.7404.2097-7.9195 2.8063-1.0623-5.1289-.4668-2.0805-1.1269-5.8225-.8369-4.8549-.676-3.4516-5.1509.984-1.8351-1.4517-.9496-1.016-1.2394-.7258-1.1428-1.0162-.7244-1.0322.5634-1.9677.9335-.4193.8048.032.3864-.3065.8047-2.2741-1.6256-1.0484.081-.9677-.3542-1.4355-.9335-.7903-1.2234-1.3549-.3864-.1452-.6116-.8224-.161-1.2903-1.014-.5001.1771-1.3224-1.3521-.8872-.097-.7903-.6761-.2097-1.4326.3065-4.1689.6451-.5474-3.3709-12.459 2.0968-9.2394 1.5323-.5633-3.3549-.322-1.4355-5.0382.9999-10.125 2.1614-3.7665.8548 1.336 6.7902.7725 4.1613-.4668-.081.5312 4.0968-.499-.032-2.4788.2741-1.2555-.629-2.0443.048-1.9638 1.5646-.837.2902-1.175-.7902-1.3683-.5969-1.4807-.065-1.0947.2579-1.0623-.1774-.4185 1.3225-.016 1.855.2736 1.9193-.2253.6613.064 1.1612-.8209.1773-.3542-.629-1.175-.8386-.8692.7097.032.742-.4829.4192-2.7525.4032-.7886-.1452.161.742-.5795 1.0968-.7243.097-.8047-2.0159-2.4951-.1291-1.674.2096-.676.2742-.821.8872-.9979.2257-.2898-.5161-3.8471.4515-.032-.5806-1.7222-8.6611-5.4568 1.0968-.499-2.4193-.5955-.242-1.175.097.1127 2.0484-.064.9031-.6278.2581-.9819 1.2742-.2092 1.4516.338 1.3548-.8371.032-4.8127.6452-.7083-5.0001-1.1589-4.3063-4.6519.5483-12.845 1.4194-.6921-3.6128-7.0664 2.5161-1.4648.4677-1.4165.1936-3.847.3547-4.6036.5807.2898 2.129.1932.4516 2.0763 2.6774-5.2151 1.8386-3.992.3388-.3703.7097.3703.8063-.3381.1936.048 1.8871-1.2072.371-1.8994-.1452-7.1146-.1129-.322.7419-.9657.113-5.7464-.3227-.821-3.016-6.7926-6.4193-5.4085 7.8709-.4828.5968-.9337-1.7259-.2735-1.4031.2252-.8226-1.0784-.7581-.8049-.1613-1.1267.242-1.3199.7581-1.0945.4354-1.5936-.048-.8693.4999-.161.9195-.7887.1452-.7566-.742-2.3661-1.0807-1.2555-.8709-1.4649.2096-.998-.6773-1.2555-.6451-.8691.1613-.5473.484-.3703 1.1935-.4346.7097-.6438.4354-2.2858.7097-1.0301.1129-1.8511-.5485-1.5614-.1291-1.8511-.2904-1.2072-.6128-.1932-.4677-.3218-1.8548-.7405-.7742-.8532-.048-1.1267.242-2.511-.081-1.0784.3386-.3381 1.0967-.6439.5808-1.0301.1291-2.2214.7097-.8531 1.113-1.7545 1.2419-.6438.1773-.6761-.2096-1.2394.3225-.3219.3226-.2415 2.1128.1771 1.613.4346.5161-.048.6451-1.1589 1.2903-1.5293 1.258-.5311.1452-1.336-.4677-.6439-.4678-2.3178.032-1.5453.4839-1.1589.5-.8371.081-1.0301-.3227-1.0786-.9192-2.4466-1.3549-1.6257-.4517-.6277.1613-1.9316 1.6291-1.7707.3871-.8208.6451-.6278-.081-1.7385-.9676-1.1267-.4356-1.4004-.016-.9818-.1773-1.7706-1.0485-3.8631-.4516-1.0625-.387-.853-1.0001-1.0142-.9676-.6277-.032-1.835 1.629-1.9477.5161-.7887.629-.8693.9516-1.5935-.048-2.2053.8387-.8047-.4195-1.4004-1.0805-.7404.2742-1.0623-.3388-2.4146-.032-.7083.1936-1.6901.9837-1.1911-.032-.6277.2258-1.0303.8549-.032.5645-.5311.1775-.7244-.5324-1.3842-.1452-1.2556-.4033-.7564-.6936-1.7547-.2741-1.014-.6129-1.2716-.1129-1.3038.8065-.5312-.1129-.9819-1.2742-.3541-1.3065-.7565-.2097-2.0121.8226-.8371-.2581-.5794-.6774-.9335-1.5321-.2737-2.3872-.4346-1.1613-1.0786-1.1612-.9335-1.8871.338-1.4839-.499-1.016-1.1911-.8387-.8531-1.1774-.9496-.742h-1.2878l-.4828.242-.8693 1.0806-1.1428.2097-1.0142-.7258-.193-.4194.1127-1.7419-.4184-1.8548.1288-.6129 1.7222-2.2903.5151-2.3225-.3863-1.3226-1.014-1.2258-1.4004-1.3064-1.5453-.9678-.3863-.6774-.2254-3.4031-.3701.048-2.2858 2.5-1.5131 2.7258-11.879-6.5161-.9337 1.758-3.6538 6.6612-2.4144 4.3548-3.2998 6.0645-1.3038-.1291-3.171-.8871.048-1.1452-.6117-1.2419-1.8029-1.2903-.4668-.5806-.354-1.1452-.483-.9516-2.1568-1.7741-2.5272-1.371-.7404-.129-2.6399.5806-3.1226 1.3548-1.7386.097-1.4485.5323-3.139 1.6773-.2735.2742-2.0443-1.2257-.515-.5323.4023-.6774-1.2072-.4194-.4507-1.6128-1.4809-1.8871.1127-1.0484-.5955-1.3709-.2415-1.3387 1.0785-.1613-.6279-.5967.6439-.2582.8531-.9999-.1449-.8871 1.2716-3.258-1.0784-2.5968-1.9798-3.1773 1.3199-.8549-1.3521-4.016.4186-1.2098-1.1591-.4676-.3219-.8709-1.5131-.5808-.5472-.7256-.2254-1.5162-.9979-.3065.2093-2.1289-1.481-.2743.3058-3.8709 1.0625.048 1.6578.5161.1932.5968.6117-.3871.1449-1.1128 1.6901-.9517.4989-.8387-1.2555-1.629.4669-.3387.9013-.1935.1288-.8065-.4667-.4676 1.7544-.742.9176.064.5956-6.0322 3.9114.3709.1127-1.258 1.1913.064.2252-2.7097-.4989-.6129.081-.4676-.6922-2.8388 1.3843.5324.161-.2742 1.2555-.2582-1.1429-1.0967-.499-.8226-.1127-.774.2576-.9033-.064-.8226-1.0301-.4355-.4669-1.1289-1.5935-.2259-.7887-.4677-1.1106-1.5645 5.6337-4.7097 1.4326-1.3063 8.7886-7.2902 1.9799-1.5646 3.7826-3.1128 1.2877-.9033-.9657-1.2742-.998-.9999-.2414-1.2258 4.9416-1.7097.6277 1.0323 5.6659-3.6934.064-.9033 4.8129-1.613.4829.3227.2737.7742 1.835-1.0001-.064-.5483 4.2333-2.3386.322.3386 1.2877-.6774-.6439-2.3225-.2898-.5645-.1288-1.4032.4024-.3065 2.5271.7258.9498-4.3709.016-.1129 9.1589-.2259-.7083-2.2418 10.881-1.6452 2.3662-.258 1.175 1.1129 2.1087 1.1128 1.4809 2.3065.7725.871.7726-.016 1.4166 1.016 1.0301.3871h.2093l.4828 2.4033.4347.758 1.6257 1.0806 4.1529 1.1613 1.0463.064 2.0442-.6129-.2576-2.4193.8049-1.4516 1.0784.3386.7405-.1773.1932-1.2419.032-1.8065.5472.081 1.3843-.1934 1.8028-.7581.048-.5001.5473-1.0967.4989-.387.4347-1.5323.6922-.1291-.1127-.8224.8531-.8227-1.1751-1.9193-.1449-1.2903.4828-1.5968 2.6398-2.2096 9.3359 5.6773.1932.032 3.7987 2.387 1.8672 1.371.9498-.3064 8.5633-3.3709-.3542-6.5483 3.9598-.7581 2.0603-.4677 6.8088-1.3387 1.0785-.1129.9496-.8711 1.3039-.8708 2.5593-2.129 4.1529-.7743 3.171-.758 2.3339-.2903 1.835-.081 4.668-.1614.2093-6.2256 3.3159-10.097.8208-2.3871 2.9136-.7742 10.318-2.9999 5.5371 6.5161.7726.3709 2.6882.7258.081-1.9839 4.0402.5484v1.3871l1.336.1613.3863-1.6934 6.181.9676.6438-.4838 1.4004-.048.2737-1.4517 6.7283 1.4194.7243-4.0968-.515-.3386-1.0623-.2581 1.2072-4.9676-.4025-.3872-1.513-.7095-.7727-.5647 3.493-4.0643-7.0021-6.242-.4667.5968-3.5089-3.1774 2.0763-3.6934 3.2354-5.6773.5635-1.1613.7081-.032 11.235-3.4839.4989-.081.032-1.1935.2093-.5483-.1449-1.3387.3381-.8872.1931-1.1128.5152-1.5807.4989-2.2902.9174-.2582.7244-4.6772-2.6398-.5162-.9496-1.7258-1.1108-1.6289-2.7202-3.2098-1.8833-2.1127 1.2073-.4356.853-.016 1.2073-.3709.9496 1.0161.8049-.1934 1.6257-.113 2.1408.742 3.3964-8.2741 1.8672.2419 1.674.048.1288-.742.3059-4.4031 5.2312-2 7.5815-2.9354 3.3803-1.2903 5.9556 2.5322 4.0402.1614 2.8814.016 1.1428-.081.515-3.7258 2.1892.8871 6.8892 2.6935 4.346 1.7258 2.0121-5.0483 2.2536 1.2096.9013 1.5485.016.3225 1.3843 2.129.3059.8065.1127 1.3871.5313.5483.9657-.064 2.5594.7097.3542-.3388.3701-1.0644 3.0905.4838 1.8029.032 2.173.3388.4828.3709.6439 1.4194 1.1268.4354 1.159-.6451 2.1569.032.4507-1.1773-.6117-2.4839.6117-1.7742.354-.4839.9659-.6451 1.7867.129 2.4144.5161 2.3985-.2579 1.336-.4195 1.368.4677.6439-.1773.2254.5 1.3038.3225.2093-2.2257-1.1107-1.0645-.2736-1.5323.338-.3709 1.9798.258.1932.4354.9337.3872.5151-.129.1769 1.2257.4991.3388.338.8063.7082.6291.9337.5001.4828-.4517.821.5001 1.9477-.5647 2.4788-.8224 1.8028.4838.2254.6129 1.4807 1.8548 1.3522-.113.1288-.6451 1.6578-.065.66-.1773.1771-.5807.8531-.3226 1.3039.081.9496.4355.8853.129 1.175-.2902.8854.4032.3702.5161.5472 1.9515 1.4326.8065 1.0142-1.3548 1.1589-.1775.5151.4517.4184 1.0968.161.9999.6922.9516 1.2233-.016.6277 1.1935-.6438.5484-.3541.7419.2414 1.129 1.143.6613.6277-.113.8208.4679 1.2072.3709 1.0303 1.0644.9015-.1613-.081-.7581-.5314-1.0162.5314-.9354.8691-.758 1.6741.629.6277-.2259.4185.5969.064 1.1935.7566 1.4033-.1449.5161.676.4999 1.014.1936.66.4677 1.0141-.5322.338-1.371-.081-1.9032.7083-.871.2576-.6935.6599-.2096.4185.2418.7082 1.7098.5795-.2097 1.0464-1.6614.2091-1.1612.5313-.4677.692.1936.5957-.742.853.5806.048.5484.7405.8549.1288.6612.5472.1935 1.4166-1.1129.4828-1.3548 1.2233-2.6451 1.1106-1.4515 1.3683-2.0161.5472-.3388 1.0947.3065.676.5645.8691.2257 1.3844-.4354 1.658.097 1.1589.6451 1.2233 1.0483 1.4004-.7418.7566.1614.4345-.4677.032-1.8225-.2254-1.2742.4025-.3227.064-.6451 1.9637.5322 1.7063.7742.7404.081 1.0463-.4354 1.5292-.1452.4828-.1936 1.4004.1613.9819.9839-.4185 1.758.1932.871.7403 1.1129v.6451l.3703.8226.9174.9838.9981-.129.9979-1.1129 1.4648-.6935 1.3682-.065 1.0462-.7096.821-1.1129.66.387 1.4165.081 1.014-.5161 1.4487-.3386.5473.3064 1.4004.016.8531 2.0645-.5472 1.016.161 1.2419.8854 1.3871.837.9356.097 1.371-.5635 1.2419.9981.9837-.2254.9517.7082.2418.9015-.129-.1288.9031 1.2877.9194 1.0623-.1775 2.2536-.8548 1.4165-.016.7886.4034.7888-.097.3542-1.5807-.4991-.6291.032-.8224-.2897-.9033-.032-1.1451.4668-.4033 1.0302-.2096 1.4969.8386-.048.742 1.8029 1.0807-.2254 1.3708.5956.7904 1.1911.3065 1.0303.4838 1.2877-.2581.2091-.9677-.3218-1.7257.2896-1.113.66-.9677-.2414-.5806.66-.8065.6599.016.499-.8226-.016-.7904.5633-.2902.4507.2902-.016 1.1453-1.014 2.2257-.6439.871.5956.887.7888-.2741.3862-.6129 1.5936-.742 1.8028-1.8548 1.014-1.6936.064-1.2257-1.0784-1.8064.5472-.4032 1.5776.6936.08 1.1935 1.0785.9515.177.7258-.6278 1.6613.66.1452 3.1872-4.387-3.5252-3.9031 2.9939-2.5161 9.0301-7.4998 5.9879-2.7581 3.6378-1.3548 6.2777-2.1613-.2576-4.7741 3.4286-2.129 4.5392-2.6452.4829-.4515.8209-2.1936-2.1087-.8224.7727-2.0807 2.5432-6.0967-2.157-2.4677 4.5876-3.9355.9658.2259.6117-1.0001-.4347-1.1612-.3702-.1613-1.2716-1.1129.8532-.4354.4345-.9033-.081-.3709-1.7706-1.1775-.9497-1.4192 2.4788-1.5162-.4184-1.016-.4185.048-.66-.9515-1.4004.064 3.8793-5.129 3.5411 2.6613-4.1206 5.4353.3541 1.9355 1.5614-1.1774.6438.1452 2.1891-.5968.5152-.2903.5311-1.1774-1.1106-.9194 1.3521-1.871 1.5774 1.1937 2.7525-1.3548.3863-1.2258 1.6741-.081 1.7545-.2742 1.8027-.5806.2416 2.3708.1769.5323.9176.2097 2.2374-.8549 2.3179.7258.8048-.1773 1.0945.1614 2.6882-.048.2896-.3548.8693 1.6612 1.497.5808 1.6096-4.2259.097-1.0321.9819-4.9678-.1932-.9031-.7887-1.371.7082-1.4678 4.1047-.6935 2.9778-.4354 6.7605 3.0805 2.2857-2.2257 2.3179-.9678.3863-.5322.2737.081 6.5189-1.5646.821-.8387 1.851-3.4031 1.3522.7097-.7083 1.2903.6761.387.8853.9194.032.5161 1.0462.1773 1.0947 1.1937 1.5291.5967.6277-.1935.5956.5644.5794-.8548 1.2233.3226 2.7687 1.7903 4.3139 3 3.171 2.2741 5.9395 2.6613 4.7485 2.0806.064 3.4838-.2415.8064-1.3843 3.613 2.3179 2.6129 2.0282-3.0324.2575-.2579.3381-2.0484.5311-.1936.3059-.629 1.0945-.4516 1.481-2.3065.3379-1.5805 1.9316-.2098.064-.9676.3862-.4679.6278 1.0808.6439-.3227.5474.9517 1.1267-.5645 2.7203-.871 3.4284-1.1935 2.5594-1.5646 1.4487 1.2903.5634-.2902 1.5936-1.6452.9818-2.2096 2.8974-2.9194 3.8632 3.5001.676-.1936 1.3521 2.5322 1.4003-.2904 6.7767-1.6774.9657 1.5646 2.6076-.6129-.2896 1.129.6599.7419.1127.6291-.4347.3225-.5311 1.3064-.7083.1775-.5151 1.0483 1.3683.081.3701-.6774.7405.4838.676 1.1614 1.7386.2096.016-3.4031 1.9154-.4839h2.2373l6.6157-.081 1.497-1.7257-.1288-2.4193.2897-.9355-.064-5.9837.4347-1.1453-.048-.8224-1.7385-2.0807-.6439.032-.2413-.5-3.332-.048.2737-.629.7725-.5967-.4185-3.1937.7244-1.016-.3863-.6129 2.2374-.742 3.2837-.4354.9979-.2581.6277-.887.4347-.2097 2.0443.2418 1.7706-.387.4828-.8549.081-1.8548.6922-2.4999-.064-.5807-.8693-1.0967.4508-1.3225 1.9477-1.0001 1.014.1452 1.1106.5322.2898.5 2.1248.1936.4668.4515 1.2394.5647.9336.032.2253 1.1774.5633-.048 1.1269-6.5644.5634-2.8388 1.2716-7.3385.9174-5.1612.2254-.8065.6277-3.4354-.1127-.065-.5311-3.0644 1.1911-1.0967 1.1589.129 1.1591.9838.9657.065.7888.4677 1.1428-.6775.5955.5161.7566-.5645-.2093-.8385.7404-1.0969-.032-.9677-.2574-.3549-.7405.3065-.9658.113-.081-1.5485.5152-2.4676.2252-.5323 1.0303-.5322.161-.7097 1.3843-.097 1.4487.5968.9337-.1291.3379.4516.9015.081-.2415-2.5806 1.1106 1.5162.9176.6774 1.1589 1.8387.837-.081.097.984 2.2856-.5324.2415.2097 1.4487-.2741.5151-2.629 8.9496.7579-.2416 1.8871.7888-.1452.7083 2.2095 2.0281-.7097 1.1912-.2095 2.5754 8.7256-1.2394 1.7259-.2254.629.3703.6935-.3542 1.0967.9175 1.4517.7888.097.6277-.4516.5151 1.3387.7244.8872 2.2212.3547.8048.7581.9498.4032-.3864.7258 4.2657-.258 1.0623-.4517.7404-.9676.499-1.0647.5955-2.145.7405-1.258 2.0604.8063 2.1568-5.3708.2737 1.6128.5955 1.3549.4829.4194 1.0303.2741-.2254.4193.2093 1.4194 1.1106.1613.4184-.629.66-.2743.5472.5647-.1769.7418.6439.1452.7887.8871.7242-.2743.2737.5968.7405.4356-2.1087.5967 2.2697 7.4031-.5474 1.258.1932.9194.8209.9515 2.2696-1.9193 2.0442-.7257-.3057-.8064.6921-.5807 1.2556 1.3065-.3704 1.0967.6278 2.3709-.8047 1.2419.8208.5967.2576.9517.9979 1.7096-.5633 1.9193.7887.8226 1.9316.984.6761 2.387-.3221.7097.5314.5806-1.4005 1.1774.9818 1.1935-.676 2.0645-.5151 1.258.3381.2097.4185 1.2581.6761.8387.4506.048.6761 1.3708.6599.5485-.2254.758.5474 1.1936-.1932.758-.8048.9839.6599.5322 5.6498-.3547.6117-.242 1.4165-.032.2898-.5161-.6438-1.4678-.8693-.2097-.6922-1.4515.2254-.5001-.9819-.5645-.064-.3386.7887-1.6936 1.0625-.5322-.161-.4516-1.7062-.7742-.4186-1.6451.097-.5001 2.3983.2259.1289.1613 1.7544.1452-.2735.7418.1288.484 1.851 1.016 1.7545 1.1451 2.6237-.7256-.3862 2.9192 1.6579.4032.8853-.1614.6117-1.0968.6438-.6129.7727.097.097-.7258-.6117-.5.032-.8226 1.5937-.1773.6921-.6452.6439.113 1.2072-1.0161.2093 1.4033.4185.7742-.9176 1.2096.9176.4677.4023.5484 1.7224-.4193.6117.032.4828-.4999.7083.1452 1.0784.8387.9659-.1452.6438-.8547.853.1934.3542-.3225.5312.9516 1.497-.2257.2253.3063 1.658.048 1.8028-.7419 4.0724-.4516.8047-.3549-1.674-3.8871 1.1751-.048.2576-.2903-.8693-.6291-.6922-1.645-.064-1.2582-.5311-.7257-.1288-1.1291.5955-1.8225.5795-.6936.3864.6613.6439.5 1.3682.5967.2735.484 2.9136-.4517.6116 3.5323 3.7022-.6291 4.8934-.6613.7082 5.0806 8.5793-1.3226 1.336-.129 5.1831-.8386 1.8511-.4033-.338-.4516-.2737-1.3226 2.2697-.2904.8369.1614.8049-.3064 4.6036-.6613.4345-.1936 4.3784-.629-.483-3.8386 3.8792-.6129 4.1368-.2743-.4345-3.0483-1.9155.5161-1.8029.1613-1.1106-.6128-1.3199-1.129-.7566-1.6614-.4184-1.2741-.5795-.016-1.497.742-.6761-.016-.2413-.4031h-1.143l-.4667-1.2097-.1127-1.4677 1.1428-.3227-.016.4517.9496.4355.2254-.6936.7243.032.2092-1.1129-.3863-.4839.4024-.4516-.3702-.5645 1.175-.5645.2415-1.0644-1.1751-.5969-.3702.016-.3862-3.1612.064-.113-.3864-2.5322-.66-5.7902-.2093-.4032-.081-1.4677-.2415-1.5967.064-1.8386-.1932-1.9678-1.6579.5807-.9658-.355-1.0945-.032-.048-.5645 1.7383-.6936 1.6419-.9031.9335-.9355 2.9458-2.2741.3218-.1452 3.5574-.7419 6.2454-2.3709.5634-.048 3.509.3709-.1449-6.2741-1.4004-6.5322-3.9597-.8548-1.4808.097-3.5252-.3225-3.171-.6131-4.3621-1.1774-1.0946-.5806-1.5774-.3063-5.9879-.9679-1.6901-1.7579-1.851.6935-1.2396-.4677-1.9797-1.2903-.7083-.9033-.8371-.6774-.515-.7419.1127-1.1613-.6761-1.0644-.1449-1.5807-.4186-1.1129-.064-2.2742.9335-.629 1.3682-.5161.5795.2259.2737-1.7743.5634-1.1451.9174-3.1935.3542-.4677 2.0281-1.6614 2.6399-3.516 2.2856-3.1935 1.1267-1.6452.6761.242 2.2696-1.9838.9658-1.1451 1.1268-.6129 3.9115-2.5484 4.8771-7.1612 1.8511.7258 2.157 1.0968 2.0764 2.4515 2.3984.871 2.8972-.064 7.1147 1.016 1.9477-.048.5955-.7902 1.4004-.2581 2.9458-1.5323 1.2877-1.129 2.4949-.7903 1.497-.064 2.2373.3871.7244 1.129.5795 2.7581-.064 1.9516-1.0623 2.1289-.4668 1.871.3863 2.3548 1.4326 1.7741 1.5773 1.2581.4347.097 1.2717-.4032 1.2233-.081 1.4807.2257 1.2235.9194 1.2555 1.2581.5312.8549.5955 1.9838.8371 1.0161 1.1428.9032.6922.081 2.2856-.6936 1.8349.9032 1.4649-.1773 1.1428-.2904 2.1248-.7742 1.2877.2419 4.6841 1.4517 2.7525-.5324 5.006 4.1936-.499 1.016.016 2.0645.8047 1.613 2.0121 1.4515.7565 1 2.7526 5.0806 1.2072 1.8386 2.2534 2.8872.5474 1.3387-.048.7419-1.819 1.8225-.064.4839 1.4808 2.9032.2576.9193-.032 2.3708-.5473 2.4195.1931.7742.5474.7902 1.2394.7581.9979.016 4.7002-1.016.7566.4031 2.6881 3.1774.081.5806-1.835 1.7581.2737.7741 1.014.4679 1.143 2.4676 1.2716.3064 1.352-.5806.6599-.7258 3.0102-.5807.2413-.5645v-2.0645l.6117-.3547 1.5936.5806.8854.5483 1.3038 1.2419 1.0462-.032.2093-.5806.6117-4.6129-.016-8.6127.016-2.2258-.048-11.097-.8049-2.8386-1.4004-4.5483-.4668-.484.7244-.3548 5.6176 5.5321 1.2877 3.4032.1127 2.3225.2415.3872.032 1.5 1.1589-.3388 3.2193 4.2581 1.5935 1.1613 3.6218 1.3064-2.4468 4.9354-1.8189 3.5968-.3701.2902-1.0464-.4838-.2896.4838-.9337-.1936-.7083-.387-.9496.7097-1.5775.6935-.7244-.032-.3218 1.0321 2.157.2259-.1932.7097.7243.5483 1.6901.3871.1771.4355-.4185 1.1452 2.4789-.2098 2.189 3.5968 1.4326 1.8548 2.5593 3.1129.6117.1936 1.3038-.1936.5956.4515v.7258l-.8208 1.3226-.032.9194.6438.7097.2736.7258-.032 2.0644-.8208-.032-.081 1.2742 1.0945-.2096.7887 1.1774.4024 1.3548.6277.9677.1932 1.5484-.1449 2.2902-.6921.9194-.9335.742-.7566.3547-1.8028 1.1935-.7404 1.113-.5473.5161-2.5595.9033.821 1.8871-.66.6935 3.6057 7.9675-.016 1.113 3.5251 8.145-3.0261 1.2419 1.7062 4.0161 2.9779-1.371.499 1.0645 3.1548-1.5806.9337-.5806 1.1428.032-.064 2.3063 4.7002 3.2097 6.7121 4.4999 1.4649 1.0807-.66-8.6289-.081-1.5485.7888-.8064 7.0985 4.4355.354-1.8388.4831-3.6934 11.798 1.9354-.7242 4.871-.1127 1.016 1.4969 1.3387-1.2233 8.145 1.0463-.7256 1.7062.516.5312-.2903.048-1.0645 1.6741-1.8064 1.352-.1452-.3219-1.6936 10.656-1.9837.9658 4.9999 1.3522-.032.2574.258.2254 2.4678 1.9799-.1936 1.2555.065 4.0563.6613-.2093-1.5969-1.529.2582-.3864-1.8064 3.5735-.6613.3379 1.7418 2.0282-.3386 4.346-7.1451.8048-1.4032-2.2213-1.371 2.7203-4.5805.9176.8548.9174-.9355-.3058-1.4678h1.2072l3.1388-2.6935.4346-1.0967.2093-1.0645.064-1.8548.4345-.5162 1.5131-.5161 5.8109-.2257 3.686 7.6612 1.7868 1.4032 1.8511 1.5805.8369 1.4033 1.2555.7742 1.2235.2257 2.1246 1.3225 1.3521.4195 1.6097-.1452 1.3844-.4838 1.6095.1452 3.1871-.8388 2.3983-.9839 1.3199-.081-.064.6131 2.2697 1.0805 2.5916.6291 3.2192.629 2.4467-.3711 2.3822.3388 1.4648.4677 3.2515 1.4678 2.157 1.2741 1.8188 1.8871 1.5776 1.9355.9496.9355 2.9296 2.6129 2.0441 1.4192 3.2032 1.0323 1.8834.8065 1.5774.8063-1.5613 5.7902-.2576.113-.4345 1.9838-1.8351 8.2097-.2736.8063-1.175 5.4032-.6117 2.629-.6277.3064-1.5614.3226-.9818.5807-.064.871-2.8009 12.935-.8209.1613.8853 5.1612-.1932.032.7727 4.4033-.161.774-.5473 2.4194-4.4587.5645-.9658.1775-.4185-2.1291-2.5432-.7903-.9176-5.3225-.048-1.1451-1.0142-4.2418-4.5553.8063-.5472.1936.3059 2.4192-5.6017.9679-.5472-3.0162-2.5916.5646.1127.5161-3.0743.6129-1.5615 2.0645-1.6095.2257-.8854-.2741-2.1892.3064-.3862-1.5644-.4185-3.0808-.5796-3.5321-1.6901-.1936-.048-.6451.5795-.8226-4.4265.613-.5473.7095-2.0925.9517-.9979-2.3709-1.6742-.5485-1.4165.4517-.032.5645-.7082 1.1451-1.0142 1.2258-.3863 1.0485-.9658 2-.7244 1.1451-.4023 1.5805-10.576 1.9838-.4345-2.1772-3.1388.5161-.4667-2.7097-5.1026.6613 1.1106 6.2095.032.5967-1.0625-.032-.081-.4195-1.3521.2904.9174 5.5483.4186 1.0967.8369 2.6612-.3218.984.3701.4999.9498.048.7405 2.1291 3.8631-1.2742 2.9778 9.5159 1.6418.5.7726.065 1.6419.7581 1.6257-.1129 2.4305-.387.3381 1.758 8.2414-.9356 6.9697 6.7419 1.1913 1.4516 1.5451 1.2097 3.2193 3.1289 4.1208-.4676.9013 4.774.2093.242 5.0864-.9354 9.4488-1.6614-.8854 9.758-6.6157 1.2096-5.4727 1.0646.6439 3.0644.048.8548.9818.2904.1771 1.3387-.9337.1451 1.0947 6.7579-.7888.8388-1.3521.048-.7888 1.5323h-1.3521l-.9013.2902-.483.6129.5795.4677-.4829.6774-.6599-.081-.4507-.5646-.982-.032-.3862.9839-.5151-.4515-2.6076.5806.1288.5806-2.0926.4032-3.7504 2.1613-10.463 8.0805-.8693-.097-.354-2.4356-1.2073.1129-.3864-3.1773-6.1326.8387-.2576-1.7582-4.3943 1.1453 3.6699 13.161-8.6437 2.6935-1.5131-6.6933-7.3723 1.2258-5.0703.7579-7.4526 1.2582.5312 3.7418-2.0121.3871-.1932-1.0322-5.6498 1.016.6277 4.0645-3.0744 1.0645 1.9799 3.6774-2.7847.8709 2.8491 21.209 1.0784 7.7902 1.0623 8.0645.1771.1613-.1932 6.3064-.4989 7.9676 2.2536-.1774.5794 3.7096-.016.7742-.8531-.6613-.4346.048.064.7581-1.9799.081-.1288 2-4.2334-.048-.016 3.258-.1449 3.8548 1.2877-.064.1127 1.1612-2.157 2.2581-1.3843 1.7258.4828 3.2419 4.3301.048-1.2716 7.5805.1449.4999 1.0303.1291 5.0059-.6774 1.5936-.4032 1.014-.5322 2.9456 1.4676-.2896 2.371-.5634 3.6451-1.2716 8.7741 1.2877.016-.2254.516.5634.8709.5955 1.4516-.081.5484-.9013.5967.2736.742-.6278.7097.2576.3226 4.2333.5968 1.4165 9.3062 1.2072-.2096 1.2717 5.3063.3059 1.4677.097.4677-2.6882 2.1291.016.6935-3.3964 2.5645-.3057-1.0322-1.1752.6129-1.8188 1.258.5955-4.5967-3.2354-.5483-.6438 5.9838-2.9134 1.0644-.66-.064 1.7384 2.4838 1.6258-1.2419-.3381 3.6451-4.9737.9194.3379 2.0483-3.7182.6291-9.1267 1.6612-.4829 1.742.7888 4.7417.193.7097-.3701.2581-7.3401 1.0806-1.9637.3388-4.0079.4354-.6439.9033-.7243.2902-4.0403-.4192-.9015 1.7579-6.6638.1936-4.169.2257.2737 2.1936-1.6419.1936-5.1831.7742 1.0464 1.3386 2.5271 5.4677.7082 1.9193 1.9477-.4677.3702.7742.2254 1.0161-.161 2.5806-1.6259-.1291-1.2877-.3225-.8369.1452.016 2.1289-.097 1.0324-1.0302-.1936.016 1.1128-.9657 1.6614-.1449.9999-4.346-.5806-1.2878-13.839.9174-.1773-1.014-5.9193-.1288-.1291-6.358.9356-1.1267-8.4031-8.0161 1.0805.4667 3.3549.7244 5.258 2.672-.4033.8854 5.7579.4506 3.3064-.2896.3066-3.5896.5483.097.8388-9.6257 1.4676.3702 2.0968.5152 3.5645 9.6578-1.4516-.4025-2.6452 1.1267-.3872.2254 1.226 2.6721-.4195.4023 2.3872-3.9436.5806.2737 1.9193.5794 3.516-13.956 2.1291-.3864.5645-4.6518.7419.338 2.2259-3.2998.516.5794 3.7258 1.1912-.1936.2254 2.0806 1.1267 7.9838-1.513.1935-1.2716-8.8224-5.2958.8871-3.5091.5161-.1771.871-.9013.6774-.064.4677.2898 1.4032-.1288 1.129.66 1.2581.5312.5483-.2577.6129-.676.3065-2.0443.3386-2.9295.6613-.9818.081-1.7385.3548-8.5954 1.4516-2.5434.371.161.9354-1.175.3227.8532 5.258-1.143.2741-.9657.9839-1.5131.3225.4508 2.3065.6438.9354.097.7742-.6117.6452-.097.7419.2091 1.0483-.5633.9517-.032.8063-.5312.8872.2415 1.2257-.1449.7904-2.2536-.5806-1.175-.8549-.8692-.081.064-.4838-.5795-3.4032-.7726-4.774-1.8672-11.113-.5634-3.6291-1.9959.629-3.9115 2.4033-1.9477 1.1935-1.7222.8227-.6117.064-.9658-1.9034-1.0302-.9192-.3218.4193-4.3623.7903-3.5572.7097.7083 2.3225-8.5956 1.5484-.4184-2.2097-2.9297.5001.499 3.0161.6921.2742 1.2394.8386 1.2074.2904.4829 1.7096 1.5934 8.7096.6117 3.5321-7.3238 1.2258-.4828-1.0483-.4509.1452-5.5532.887-4.5714.7581-3.2998.6128-.8048 1.5001-.5634-.2582-.7082.2582-.9657-.016-.097-2.5967-1.1106.387-.1771-.5161-1.8189.032.1449-1.2419.9659-.5484-.2094-1.0323-.9657-1.1935-.9175-.081-1.7545.3227-3.8309.6935h-.3381l-7.7102 1.3387-.3702-.2097-4.1368.7742-6.8732 1.1935-.4667-.1936.6438 4.2904.1289.2096.9819 6.758.3863 2.9194 7.3561-1.371 3.2193-.6451.2254.9838-.016 1.0805-.4025.7904.6116.5161 1.3522 2.6935.4667 1.4516-.6599.2259-8.1126 1.4999-5.0542.8548-5.5534.984-.1127-.048-5.328.9192.5634 3.2097.515 3.3709 5.2314-.8549.2737-.097 2.3661 13.484-5.6015.8064 1.2716 7.0807 1.5613-1.8873.7244 1.7098.4184.6774-.5312.4032-1.2394 3.2419-2.3178 1.1289-2.1409 5.2258.4507 2.6613-7.2272 1.2096-1.5614.2259-.016.9999-2.4627.4355-4.2335.8386-12.362 2.1936-.064.081-3.5896.6613-4.5392.7742-1.2072.4999-2.4145.242-2.1247.4354-.7244-.048-1.6901.2581-6.4868 1.1773-1.9638.2903-3.7505.7097-3.9114.8387-.515-.048-.5314-1.887-.081-.8227.5151-.516-.1127-.7259-1.0462-.6612-.982-.1936-.3862 1.0807-.8371.7419-3.0744.8709-.8048.048-.982-1.0483.6277-.4677.982.258.5956-.6452-.5956-.3225-1.5453.016-1.2716.5484-.7886.6613-.4669-.5806-.4346.3063-2.1087.629-.6599.6452-1.1428-.048-.7566.9033.08 1.0967-1.3038.4356-.6278-.5002-1.0301-.4031-1.3682-1.4355-1.2716-.8872-.2415-.6933-1.8994-.5486-2.4305-2.6128-.322-2.1128-.4185-.7258-1.1911-.1613-.483-1.871-.6278.742-1.3358-.6129-.7244.3064-.837-.5322-.8693-1.7742-1.6096.4516-8.7082 1.7257-7.4687 1.4194.8852 8.258-4.6034.887.5794 2.7742 1.8511 9.4837-6.825 1.3226-5.6659 1.0968-6.3742 1.2742-.1771-.2581-.6116-3.4516-.7244-.258.161 1.1935-1.5453 1.3548-1.0784.3064.3059.5161-.483 1.0001-.5473-.2259-.6277.6613-.4829-.3225.1449-.5161-1.2394-1.7904.4185-.9193-.9337.081-3.7344.6936-.3379.016-2.0282-11.226-5.1991.871-1.0784-5.6613-1.6259.2742-.8048-4.1935-4.4265.8226-.3702-1.9193-.9014-3.129-3.8471.6451-6.3903 1.1613-.3218-1.2258-2.0604.2741-7.6137 1.2743-4.9094.887.821 4.242-7.2113 1.3387-4.8612.9515-10.35 1.8709.2415.4677-1.3038.3065-9.529 1.6451-1.0303-4.3063"></path>
            </g>
            {/* ./MAP REGIONS */}

            {/* NAME REGIONS */}
            {regionGolovanivsky && <GolovanivskyName />}
            {regionNovoukrainsky && <NovoukrainskyName />}
            {regionKropyvnytskyi && <KropyvnytskyiName />}
            {regionOleksandrivsky && <OleksandrivskyName />}
            {/* ./NAME REGIONS */}

            {/* NAME GLOBAL REGIONS */}
            <g
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth="1.6113"
                transform="scale(.999 1.001)"
                fill={regionKirovograd ? '#fff' : YELLOW}
                fillOpacity=".92549"
                opacity=".85"
                aria-label="Кіровоградська">
                <path d="m2587.9 1783.3h-10.001l-12.296-24.297v24.297h-8.8531v-47.938h8.8531v23.215l12.493-23.215h9.5417l-13.149 23.084z" />
                <path d="m2600.3 1783.3h-8.722v-36.527h8.722zm-9.0827-46.069q0-2.1641 1.246-3.4101 1.2788-1.2788 3.5412-1.2788 2.1314 0 3.4101 1.2788 1.2788 1.246 1.2788 3.4101 0 2.2296-1.3115 3.4756-1.3116 1.2132-3.3774 1.2132-2.1641 0-3.4756-1.2132-1.3116-1.246-1.3116-3.4756z" />
                <path d="m2624.1 1783.9q-2.3609 0-4.1971-1.0493-1.8034-1.0821-3.3773-3.7708h-.459q.5246 4.4594.5246 5.3775v14.919h-8.7876v-52.66h6.7547l1.5083 4.7544h.3934q2.7216-5.443 7.9023-5.443 4.984 0 7.8039 4.9512 2.8199 4.9184 2.8199 13.936 0 8.8859-2.9183 13.936t-7.9678 5.0496zm-2.6888-30.461q-2.5575 0-3.7052 2.3936-1.1148 2.3609-1.1804 7.8695v1.1476q0 6.0333 1.1477 8.7876 1.1476 2.7543 3.8035 2.7543 4.5905 0 4.5905-11.608 0-5.7053-1.1476-8.5252-1.1148-2.8199-3.5085-2.8199z" />
                <path d="m2668.2 1764.9q0 8.9843-3.8035 14.001-3.8036 4.984-10.427 4.984-4.197 0-7.4104-2.2953-3.2133-2.2953-4.9512-6.5907-1.7378-4.3282-1.7378-10.099 0-8.8859 3.7708-13.87 3.7708-5.0168 10.46-5.0168 6.4595 0 10.263 5.1151 3.8363 5.0824 3.8363 13.772zm-19.411 0q0 5.7053 1.246 8.6236t4.0003 2.9183q5.2463 0 5.2463-11.542 0-5.7382-1.2788-8.558-1.246-2.8527-3.9675-2.8527-2.7543 0-4.0003 2.8527-1.246 2.8198-1.246 8.558z" />
                <path d="m2700.4 1756.2q0 3.0822-1.8362 5.1479-1.8034 2.033-5.2791 2.6232v.2623q3.8364.4919 6.0005 2.656 2.1969 2.1313 2.1969 5.5414 0 5.2463-3.7052 8.0334t-10.591 2.7871h-12.821v-36.527h12.755q13.28 0 13.28 9.4761zm-7.9678 15.706q0-2.328-1.5083-3.3445t-4.5577-1.0165h-3.279v9.1811h3.4101q5.9349 0 5.9349-4.8201zm-.9509-14.919q0-3.6069-4.7872-3.6069h-3.6069v7.7055h2.6232q2.8855 0 4.3282-.9181 1.4427-.9509 1.4427-3.1805z" />
                <path d="m2733.9 1764.9q0 8.9843-3.8036 14.001-3.8035 4.984-10.427 4.984-4.197 0-7.4104-2.2953t-4.9512-6.5907q-1.7378-4.3282-1.7378-10.099 0-8.8859 3.7708-13.87 3.7707-5.0168 10.46-5.0168 6.4595 0 10.263 5.1151 3.8363 5.0824 3.8363 13.772zm-19.411 0q0 5.7053 1.246 8.6236t4.0003 2.9183q5.2463 0 5.2463-11.542 0-5.7382-1.2788-8.558-1.246-2.8527-3.9675-2.8527-2.7543 0-4.0003 2.8527-1.246 2.8198-1.246 8.558z" />
                <path d="m2759 1746.7v7.0497h-10.263v29.478h-8.722v-36.527z" opacity=".85" />
                <path d="m2780.2 1783.9q-2.3608 0-4.197-1.0493-1.8034-1.0821-3.3773-3.7708h-.4591q.5247 4.4594.5247 5.3775v14.919h-8.7876v-52.66h6.7546l1.5083 4.7544h.3935q2.7215-5.443 7.9023-5.443 4.9839 0 7.8038 4.9512 2.8199 4.9184 2.8199 13.936 0 8.8859-2.9182 13.936-2.9183 5.0496-7.9679 5.0496zm-2.6887-30.461q-2.5576 0-3.7052 2.3936-1.1148 2.3609-1.1804 7.8695v1.1476q0 6.0333 1.1476 8.7876t3.8036 2.7543q4.5905 0 4.5905-11.608 0-5.7053-1.1476-8.5252-1.1149-2.8199-3.5085-2.8199z" />
                <path d="m2815.1 1783.3-1.7379-4.984h-.1967q-1.9346 3.2133-4.0003 4.4265-2.0657 1.2133-5.2135 1.2133-4.0331 0-6.3612-3.0167-2.2952-3.0166-2.2952-8.3941 0-5.7709 3.1477-8.558 3.1806-2.8199 9.4762-3.115l4.8528-.1967v-2.6232q0-5.1151-4.4266-5.1151-3.2789 0-7.5415 2.5576l-3.0166-6.0333q5.443-3.4429 11.837-3.4429 5.8038 0 8.8204 3.3445 3.0494 3.3118 3.0494 9.4106v24.526zm-7.5744-6.1644q2.3936 0 3.8036-2.1314 1.4427-2.1641 1.4427-5.7381v-3.0822l-2.6887.1312q-2.9838.1639-4.3938 1.705-1.3771 1.5411-1.3771 4.5905 0 4.525 3.2133 4.525z" />
                <path d="m2846.2 1776.4v-22.756h-4.2954q-1.246 14.165-4.7544 22.756zm13.575 19.87h-8.6564v-13.017h-16.657v13.017h-8.6564v-19.87h2.1969q2.6232-5.2791 4.1643-12.919 1.5411-7.64 1.9673-16.755h20.887v29.674h4.7544z" />
                <path d="m2876.5 1783.9q-6.525 0-9.9351-4.7545t-3.4101-13.968q0-9.6401 3.2133-14.394 3.2462-4.7545 10.001-4.7545 2.0329 0 4.2626.5902t4.0003 1.705l-2.492 6.7875q-2.7215-1.6067-4.82-1.6067-2.7871 0-4.0331 2.9182-1.2132 2.8855-1.2132 8.6892 0 5.6726 1.2132 8.4925 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2953v7.6727q-3.4429 2.1314-7.6072 2.1314z" />
                <path d="m2898.1 1761h3.0822q7.312 0 10.755 2.656 3.4757 2.6559 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.722zm8.3285 10.886q0-2.328-1.41-3.3445-1.3771-1.0165-4.4265-1.0165h-2.492v9.1811h2.6231q2.7215 0 4.1971-1.0821 1.5083-1.1148 1.5083-3.738z" />
                <path d="m2939.1 1746.7h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
                <path d="m2970.6 1783.3-1.7378-4.984h-.1967q-1.9346 3.2133-4.0004 4.4265-2.0657 1.2133-5.2135 1.2133-4.0331 0-6.3611-3.0167-2.2953-3.0166-2.2953-8.3941 0-5.7709 3.1478-8.558 3.1806-2.8199 9.4762-3.115l4.8528-.1967v-2.6232q0-5.1151-4.4266-5.1151-3.2789 0-7.5415 2.5576l-3.0167-6.0333q5.4431-3.4429 11.837-3.4429 5.8037 0 8.8204 3.3445 3.0494 3.3118 3.0494 9.4106v24.526zm-7.5743-6.1644q2.3936 0 3.8035-2.1314 1.4428-2.1641 1.4428-5.7381v-3.0822l-2.6887.1312q-2.9839.1639-4.3938 1.705-1.3772 1.5411-1.3772 4.5905 0 4.525 3.2134 4.525z" />
            </g>
            {/* ./NAME GLOBAL REGIONS */}

            {/* Mines */}
            <Mines x={2640} y={1815} day={day} total={total} />
            {/* ./Mines */}
        </>
    );
};
