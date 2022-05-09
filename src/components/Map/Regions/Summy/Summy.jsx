import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';

import { Akhtyrsky, AkhtyrskyName } from './District/Akhtyrsky';
import { Sumsky, SumskyName } from './District/Sumsky';
import { Romensky, RomenskyName } from './District/Romensky';
import { Konotopskiy, KonotopskiyName } from './District/Konotopskiy';
import { Shostkinsky, ShostkinskyName } from './District/Shostkinsky';
import {
    BLUE,
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
} from '../../../../variables';
import { Mines } from '../../../Mines/Mines';
import { useMinesInfo } from '../../../../hooks/useMinesInfo';

export const Summy = () => {
    const regionSummy = useSelectRegion('Сумська область');
    const regionRomensky = useSelectRegion('Сумська область', 'Роменський район');
    const regionSumsky = useSelectRegion('Сумська область', 'Сумський район');
    const regionShostkinsky = useSelectRegion('Сумська область', 'Шосткинський район');
    const regionAkhtyrsky = useSelectRegion('Сумська область', 'Охтирський район');
    const regionKonotopskiy = useSelectRegion('Сумська область', 'Конотопський район');
    const { day } = useMinesInfo('Сумська');
    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionSummy)}
                stroke={DISTRICT_STROKE}
                strokeWidth={DISTRICT_STROKE_WIDTH}
                fillOpacity="1">
                <Akhtyrsky color={useDistrictColor(regionAkhtyrsky)} />
                <Sumsky color={useDistrictColor(regionSumsky)} />
                <Romensky color={useDistrictColor(regionRomensky)} />
                <Konotopskiy color={useDistrictColor(regionKonotopskiy)} />
                <Shostkinsky color={useDistrictColor(regionShostkinsky)} />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m3424.4 1101.1-.193.529.1288 2.1193.322 2.5806.9818 1.2274-2.1407 2.1064-.6439 1.792.7727.2322.7886 1.371-.6117.5322-.1449 1.8451.5152.8178-.2415.7532-1.2233.1452-.5312.5532-.8692-.055-.4829-.3016-.6921.085-.9176.8355-.4989-.2452-.3058-.8628-.4991-2.6516-.097-3.7984 1.4002-1.7451-.6277-.2564-.6761-.7807-.9657.1468.821.8145.016.4984-.7083.4629-.7082 1.0016-.016.5339-.66 1.9145.2897.2822-.3863.979-.9176.5049-.3379.9677.6761 1.2645-.7727-.2016-.8693.1452-.9013-.5613.3863-.7306-.8852-.5791-.5635.024-.9658 1.5613-.5633-.1339-.5312-.6419.064-.4661-1.0141-.2258-.6278.6741-1.5775.6339-.7081.031-.6117-.7049-1.0624-1.8403-1.0784.092-1.0625-.271-.5634-.4806-.7564-.121-2.3018-1.1048-1.8511-1.2549-.7405-.9741-1.3521.1677-1.175-.2548-.2254.9693-.8691.9242-.5956.9451-.4991.1887-.9013-.9758-.2254-.6645-1.5131-.7193-2.9134-2.1984-.6438-.308-.8693.01.081-3.3435-1.8672-.3564-.4023-4.9112-.2093-.4065-2.817.042.5313-2.0065 1.5452-5.0225-2.35-.2887-.5634-2.1532 6.0039-8.9902 2.0765-3.0257 1.5453.1532.8209-1.6257 1.7223-6.0274.4185-1.0483-2.1891-3.8355-.998.9742.8692.4968.2736.8967-.9657.9984-.1127-1.1726-.5473-.5193.032-1.2693.6439-.792-.7888-.5225-1.3682-1.8371-1.2716-.9355-.7244-.3064-.1288-.5678-1.1589-.3145-.3862.1597-.9498-.2774-.4829-.879-1.1589.5984.2897.9403 1.0786.329.4023.6516-.1449.471-.9657.8467-.7566.3613-.4345-.1581.1449-.8209-1.2394-.8436-.5634-.01-1.4004-1.5355-.3057-.8193-.1127-1.5242.4023-.3839 1.1752-.1581.193-.45.016-1.3225.7405-.6371-.5473-.7468-.6438-1.4-.9818-1.379.2896-1.5161-.8532-.4225 1.5615-2.0484.5633-.5661-3.2515-1.6436-6.9536-1.0016-4.9898-.6564-1.8352.7193-.676-.7241-3.0744-2.5274-10.962-9.695-.032-.2242 2.3985-5.3113.5311-1.5435-.3381-.8854-4.7805-2.9161-2.2858-2.7323.5795-.6096-.9335-2.0484-1.2395-.5 1.835-1.6161 1.8672-1.8112-4.4104-1.9952-.2093-1.2435-.66-1.1258-.4506-.3323-.7727.7758-1.4809-1.0274-1.8511-1.7741-2.9295-2.9774-1.2233-.1581-1.0302-.921-5.8431-3.6096-6.696-4.7741-2.0765-3.5161-.7082-1.9129-1.2233-2.4903-1.5453.27418-2.6077-1.8951.2415-.5629-.8209-.84354-.499-1.9516-.4025-3.7983-.161-2.2113.6922-6.5951.7082-6.3741-.081-.32258-.9981-7.2741-.515-4.2758-.3702-.6629-.4025-1.5354-.9335.14842-3.171-1.3306-.4669.27097-2.4627-3.0645-2.9134 3.008-1.0463.83547-2.5755.3516-1.6095-.61128-3.7345-.14681-4.2011 1.1548-.499.63225-.7404.35645-3.2676 2.6645-5.6659 1.4806-.5153 4.6064-.2574 2.2113-1.3682 2.808-.5312 2.0016-1.175.50646-.4991-.47903-1.6096.41774-3.1709-2.9838-.9659-.071.8209-1.079.5795.27742.3703-.54032 1.4647.5113 2.2214-5.8386-1.1429-.45161-1.7385-1.2758-.853-.0694-.3703-.6145-2.8973-.5645-.483.42095-.6438-.53225-.3541-.72579.081-.67096-1.4648-.37741-.821.10648-.9335.40645-1.4004.88224-.1127.41774 1.8028.99191.4669.51291-1.0142 1.6403-2.35-2.1242-.9176.5016-1.6256 1.2838-1.6259.0565-.3379.33547-.7888 2.2677-.676-.2774-.2897-1.2.4185-1.0226.5472-.66451-2.8652-1.4258.2737-.69193-.6439-.2629-.064-1.2984-2.4627-1.9258.4346-.57257-7.839-6.0838-6.4225-4.9161-8.1447 10.856-.7888-.60161.1932 1.1903-.9659 1.658-.676.20484-.4024.54193-1.5934-1.3419h-.628l-.6438-1.6387-1.7384-1.2726-.016-1.2274-1.1106-2.5709-3.0744.96127-.5955.0565-.2415-.92901-1.7545.66772-3.5574 1.6532-3.0905 1.1355-1.8671.77095.837 1.6887-1.4487.071-.5473.26935-3.0906 1.0984-.2735-.042-.4026-1.1693-.6599.2387-1.6257 1.0274.4507 1.429.7726 1.8774 1.996-.38225 2.1731.65 3.6055 1.2032 1.3038 2.0258-1.336 2.8887-.3218.45483-1.4165-.73548-3.6218 1.9129.6599 1.6613.5474.79836-6.3582 1.7968-4.845.12261v2.6612l.7083 1.3516-.032.63547-.9659 1.0935.016 1.2806-10.752.77257-3.171.20323-2.5432-1.8032-1.4649-.81289-.6277-.18065.2415-1.0661-2.9297-.61935-5.7947-1.3209-13.344-2.9564-1.7385-.40482-3.5411-1.1516-.097-1.6081-4.4587-1.2306-1.1267-.2387-1.2073-.64999-1.7385.69031-2.2212-1.6629-.4508-.0516-2.0924 1.0919-.1771.92418-2.3179.0145-4.0241.1452.097 1.8435-1.3682 1.0742-.6117.90482-1.7224-.56611-.161.54516-.9659-.33871-1.8832-.89999-.064-1.1952-.7888-.49515-.5473-.75645-.1127-.74353-.515-.66128-.7888.26451-.9335-.27097-1.0947.0597-.5794.97096-.064 1.1774-.7242 1.0064-.322 1.0274-.66.38387-.2093.66289-2.0119-1.1742.3541-2.3532-.7083-.87902-3.332-.8645-7.8068 3.2177-.4828.41935.4667.50967.5956 1.5484.1288.7371-.9335.61288-3.8471-2.9677.2414-3.658-1.5613-.10647-.3059-2.0838.3059-.49515-.7726-.62579-1.6259-.0968-5.2473.89192-2.7525.0532-.2737-9.8208-14.632.26452-.3059-5.208-4.5392-.89192-1.9316-3.487-1.2716.0903-1.0784-.4629-.1288-.52419.4025-1.8726-2.3341-1.4048-1.2555 1.458-1.2555-.59999-.4185.93063v1.271l-1.3199-.40321-.5152.62257-.6759.0807-.5957.51935-.4507 1.0258-1.9638.83708-.6277.86451.2093 1.0935-.3703 1.0435.5474.88546-.8693 2.687-.2093 1.9984-1.3521 1.6516.016.81933.8049 1.2258-1.3199 1.071-.9818-1.5726-2.0443 3.3193-1.7867-1.4177-2.2858-.25806-.016-.26613-3.2837.10164-1.9637-1.9064-1.0945-1.1919-.8371-2.2403-.3058-.21452-1.8671-.29999-1.1269.3758-3.6055-.31129-1.6259 4.3499-2.8167 1.0016-.982-1.2419-.7083-.0532-1.2072 1.2371-1.7866 1.5226-.2898-.0807-4.024-4.8451-7.7424-.72903-.7244.59516-1.2555-.90321-1.3199-1.0226.8369-.57902-1.1428-2.2274-1.6257-3.9677-.9498-.98547.1772-.45 2.3822-2.5 3.7665-3.3322.2415-.28386.9659-3.1854.8369-1.8516 1.4004-1.358 2.9619-3.3064-1.2557-1.8258.9014-1.0113 1.3844-1.9596.8209-.81611 3.9759.71289 1.0462-1.6564-.1288-.55162.4506-.56127-.7081-.61936-4.9095-1.0806.9337-2.171 1.0784-1.5854 2.8974-11.585-.9497-.68709-.032-.92095-.3541-.69193.2253-1.2516 2.0925-1.15 2.6721.49677.6599.20967.2736-.59998 2.0764-1.9274-.016-2.0048.1449-3.7774.821-7.0451.2092-3.35-.2092-.57903-2.5271-4.2161-1.2716-2.2758.6438-.41289 2.688.55321.982.0436 1.3199-1.9645 1.3038.0726 1.0784-.52096 2.1409-.16775 1.0945-.37902 1.1106-.73708 1.8512-.31773.8852-.80645 1.0142-.0565 1.4164-.35645.7243.13229 1.0947.55645 1.2555-.26612.064-2.3661 2.8007-.50967.6277-.61772 1.9316-.37903 1.5775-.60322-.9175-.4629-.2414-.74837-.837.25968-.5473-1.3371-4.0885.67258-.8049-.31129-.8691-2.85-.3381-1.5935-4.7001.44192-.1127-1.5435-.322.0226-6.1004-11.137-1.8672-4.1645.032-.71774-.5151-1.5677.1771-.52256 1.9638.73063 1.2716-3.2564-1.336-1.2645.3702-1.1919.1932-3.5806-1.014-.16452-1.0303-2.937-.5795-.0839-.5794-1.1258.4989-.90644-.016-.78386 1.7386-.42419.9013-1.0855.161-.7258.8853-.15165-.064-.52741-.7243-.4258 1.2716-1.5.4184-.003.4025-1.221.66-.28549.9013.0839.7405-1.208.3864-1.3387-4.1047-.6516.9174-1.9968.3703-4.3612 2.4145-.67904-.1771-.40483-.8208-.12423-.5153-1.3645.081-.49999-.9497-1.7-.081-.90967-.9819-.82095-.3702-.7645.322-1.9113 1.1267-1.2693 1.3522-.8129.2896-.66772.9176.3516.5311-.46611.4668 1.3984.7404.10486.499-.29031 1.7385.31612.2897-.69353 1.4648-.70967.064-.33387-.6922-1.0661 1.336-.68385.6117-.82418-.66-1.25-2.9938-6.6322.048-4.6112.8047-1.3129.032-3.6661-.032-7.7483-.8852-.27904-2.4307-.005-.064.98386-1.3521.50806-.7083-.0403-8.4828-1.2806-2.0926.003-.7405.16612.6761-2.5984-4.0403-10.372-.7242-2.2645.7886-.51935.4669-.86127-2.2213-2.4016-2.7687 1.3726-7.7746 4.8999.322 4.6128-.8531-.89516-.821.0323-.9013-.56612-2.0443-.2484-.3381-.64192-2.8489-.82418-.4185-.87578-2.0765-.74839.3219-2.1242.8853-2.1871.5634-.9016.5634-1.3935.1932-1.4387.4667-.44515 2.0121-1.3016.3862-.78386-.4828-2.1742.9336-.40967.3863.33225 1.2394-1.8193 1.1267-2.0435 1.0464.75321 2.2051-3.1112-.2252-.99675-3.5413-1.6935-2.8168-2.279 2.9295-5.4499-.5312-2.9435-5.3601-.63871-2.9617-.41612.8048-4.2451-4.3783-.55482-7.356-.85967-2.4788-.41289-3.5413-.47419-2.9939-.50321-1.8994 1.7612-1.7224-1.129-1.6418-1.1274 2.3662-4.0564 3.8631-6.0515 7.0663-12.55-1.6095-1.2258-3.1549-2.75-3.815-4.1338 3.9436-5.2548 2.9297-3.7112-2.4628-1.8274 3.0422-3.6387 2.157-.36451 8.8852-1.1113-.2093-1.8903 3.2676-.3371-.7566-6.1402-1.2072-1.2548-1.2555-1.7484 4.7807-5.5612 5.1831-5.6644.3862-.51773-2.157-.74677-.6277-3.9467 2.1087-1.1677-.2094-2.6483 1.9638-.0871.2415-3.3596-.4184-.30967-.032-1.2871 1.0784-.24516.032-.95805-1.1428.78224-.4186-.85643-.499.0565-.2091 1.1613-1.1591.45644-.7405-.32903.8049-1.0806.3703-.83708-2.7525.56773-.1771.51128-1.3361.29676.2416-.6145-1.9477.0161-.2254-.88225.5794-1.4887 1.5293.25967 3.3641-.92257-.3864-1.0161-1.4163-.0419-1.1752.72578.2254-1.1161-1.0945-.23388.7405-.90321.7886-.14358.6116.28871.9498-1.5613.7404-.64676.9496.69676.7244-.6887.4508-1.4468 1.7545-.59354-1.0142-1.308 1.5775-2.7242-.6116-.19193-.6922-1.2161-1.1267-1.2742-.322-1.3887.6117-.15488 1.9154-3.3887-1.3199-.72901-2.9134-1.8242-.9819-.31934-.1127.82901-1.4648.25484-.4829.7258-.8854-.67419-.6438.37741-.5956-.47418-.9336-1.4984-.6761-.76773-.1449-2.1984.064-2.3855.6922-1.7064.322-1.3935-1.7384-.32903.161-.48063-.5312-1.5564-1.7222-3.137-.5151-1.0726-1.8029-5.1483 5.9074-2.3274.2898-1.1951.66.51773.4023-1.2887-.081-1.4209.66-.67579 3.0584 2.8726-1.4165 2.6919-.2898.84031-1.8511.5387-.1932-.72741-1.014.25645.3702 1.2951-.499.48708 1.7545 2.1935.8532.10325 1.0462.85967.4991-.12583 1.175.63224.5794 1.1403.016 1.3048-.6921.0226-.064 1.9709.2576.93871 1.3199-.24677 1.835.18548.032.36127 2.3983.37742.4023-1.1451.8371-.54516.048 1.1742 1.7384-.0645.1932.88226 3.8309.70321.66-.6129.4506-.89676-.7886-.89353-.1449-.62579.1771-1.5548-.5794-.38064.515-.6758.097-1.2129-2.9779-1.2597-.9657.2387.064-.64515-1.3199-.53869.4345-1.0387 1.3682.2887 2.3018-.27418.9819.41128-.2576.44676.7727 1.4548.6116.11454.5312-.33871.66 1.0645 3.7665-.46774.3381-1.0645.048-1.4661-.2737-1.8467 1.4326-.60645-.5472-1.7806-1.4971-.43226-2.6237-.11777-.081-1.1435 1.1269.0307 2.1085-4.1435.6761-1.5726-4.2655-3.7241-1.4166-1.1677 2.7526-12.264.2574-1.3048 3.0585-2.7822-1.336-5.0693.1288-1.0177 1.3036-5.1048.2898-.94837 1.4326.10325v-.69192l1.3683.0436.7243.21935.3058 1.0968.6116-.0403 1.5614-.50646 1.7062-1.4193 1.996-.9016.9658-2.9338 3.7505.39354.354-3.137.097-3.9112-.9818-.19678-.9658-2.7532-.161-.86773.064-2.2064-.9496-1.1371-2.1731-.80322-1.8833-.87256-.1127-3.2951 1.0142-.85644-1.8352-.79032-1.6256-.20967.032-3.8225 1.0301-.51612-.7083-1.4032 2.1087-.25322 6.7123-1.1693 1.6901.4274 2.2857.92096.7242-1.5 1.2716-2.1129 1.9799-.87741-1.529-.79837-1.2395-.01-5.1186-.64515-3.992-5.9451-5.4084-4.3048-.6117-.6516.048-8.8999.064-1.8596-.1127-3.2258-.6438-.16774-3.5251 1.0419-1.658-1.4274-.9818.55484-.6922-1.3306-.1932-1.0758.016-1.2274.7244-1.9967 1.1106-1.8564.4346-.47095 1.8351-.94193 1.1428-1.0726.3218-1.258-1.6417-2.1209.032-1.6709.4667-.66773 3.4608.45644 1.8028-.1758.4989-.23871.5795-.82741-.2252-.7645-.9015-.29999-1.2555.34676-1.835-.0807-.9659-1.2-.3379-1.8322.2093-.53224 1.4647 1.0338 1.851-.0645 1.8994-1.021.821-.59676.7726-1.8935.2576-1.1532-.998-1.2677-2.2374.49032-1.3521-.84515-.3542-.9145-.2574-1.4-1.5615-2.6967-3.2997-3.0435 1.5131-1.4193-3.5091-3.058-.66-.87418-3.7343-2.8258-.8854-.77257-1.0623-1.3935-1.0784-2.1403-.081-1.2806-.7405-.55968-.016-.83224-.3862-.95805.66-.30483.2091-.72418-.8047-.78709-.4508-1.1822-.2575-3.2774-.9014.37095-.7083.84354-.097.99838-.7243-.60322.2737-.39839-1.159-.46451-.2415-1.2452 1.2395-1.2451.515-1.179 1.6741.0581.2414-.56611-.016-1.1032 2.672 1.3274.097-.28709-.7082-.97256.161-1.7097.6277-.6887 1.1106-.33225.3542-.51451-.2576-1.0758 1.5776-1.3758.8852-1.9322 1.1429-1.4855.2253-1.6048 2.2375-2.0113.9657-.47901 1.3199.76773.9014.14519.7888-.44354.4507-1.0871-.081-1.0355-.9014-2.5435.3381-.44515-.097-.67418-.6117.0258-.1449-.89354-.3701-.55966.032-.71128-.6922.0694-.322-.17581-1.674-.13229-.3701-.44838.3379-.58871-.5311-.57741.064-.74675-.2898-1.6968.6438-.37418-1.4326-1.1274.2415-1.7629-.032-1.2387.7566-.45483.7566.30644.676-.44031-.1127-.67419-2.0765-1.6048-.4345-1.1871.9496-.4887.5472.3871.4509 1.0096 1.0301.0613.4345-1.0548-.354-1.9032.097-2.2548 1.6095.85481.6922-.20805.1449-1.3113.4828-1.6097.9981.44032.7888-.0323 1.851-.85804 2.1891-.19193 1.0946-.41129 2.2051-1.7113.3865-1.0613-.2576-.74677-.3863-2.7838-.2737-.87902-.6117-.70805-1.2233-.1581.9496-2.0532.982-.092.8371.84838.5794-.15327.7244-2.1129-.032-1.5951.4828-.24354 1.497 1.0629.6761.30805 1.2233-.0758 2.2051-1.2758.7566-.0968.66 1.0306-.3219 1.1355.5473.82097.7725.43225.7082-.0468.5795-.9645-.016-1.1452.4667-.20966.7405.65161.9335.0855.9176-.36935.7243-1.1032.1931-1.3838 2.2535-.59355-.6277-1.858 2.0604-.87256-.5634-.95645.3702-.44515 1.1589.77579 1.3682 2.1387.6599.49839.9176.0855 1.1106-1.2564.1127-.79192 1.4969.0226 2.3824.22902.8369-.27742.5957-.60643.2735-.74032.499-.0532.6116-1.0855 1.0625-.6371-1.0142-.64677.8371-.77579.7727-.36935.7404.0113.7564.37418 1.4326-.92418.3221.63871 2.1086.61611.4668.27097.676 1.2726 1.2395-.31451 5.7625-.53226.5955-1.3661-.4828-1.9451.4667-.23548v-.91773l.6278-1.5709.4184-.50646 2.1731.40323.5634-.43386.048-.63386-.5956-.81613.4829-1.6016 1.2233-.61774.4669-.0258 1.1267.66612 1.4326.33708 1.8833-.32741.4989-1.2484.048-1.7968-.4667-1.3419-.5956-.96289-2.1891-3.0128-.4829-.93225-.3703.77095-.6278.18064-1.2716.75966-.4828-.14519.081-.97741.4667-1.3-.2415-1-.7242-.51612-.1932.62097-1.1589-.24999-3.2837-1.779-.6599-.65483-.306-.82256.2738-1.3145-.2899-1.1871.6439-.32419-.4023-2.1016-.982.0629-.9174-1.2548-1.0784-2.5451-1.9316-.003-4.0724-1.2194-3.0905-1.2274-.2737-1.1032.6599-.96773.66.92257 1.0945.17903 1.4004-1.0742.032-.60967-.5795-.68385-.7082-2.229.4345-1.5484.7083-1.1097 2.994.41613 2.5755.24354 1.8349.33064.9979-.5387 1.7386-.14359.7886-1.2403.7565-1.6419.8532-.86933 6.664-4.4403 3.364-.54032 2.4468 7.837 5.0542 3.4.5151-.3016.4829-1.3484.8531-.6532.2093-.51291 1.014-.61934.5956-.10809 3.2515-1.0242 1.851-1.0226 1.2556-.17096 5.8591.0968 2.5754-.021-.064-7.9015-.1288-5.4515-.064-8.5692-.7566.27419-1.4648.86774.1771 1.2242-.4508.4258-7.7744-1.8645.048-1.0145-1.2877-.17421-1.513-.002-3.3159 1.071.048-.68871 1.2233-1.808.5312-1.6629-1.9799-3.3016-1.0945-1.5871-6.1972-2.8306 1.8995-3.3403-10.801-5.4677-2.9134-1.5129-3.5735-1.4338-.5472-.50323-2.7687-1.3887-1.3682.43708-.9818-.13874-.5312.21129.3541 1.3693-.177 1.3484 1.4003.42256 2.0765.20645-.1127 1.179-4.8128-.39354.338-1.958.2254-2.8435.8531-2.029.3058-1.0952 1.8994.071.1288-1.2693-.2093-1.8661-.177-.40645-.9659-.15648-.3862-.62418.3701-.88063-1.0462-1.421-1.0141-.0145-.9013-.6016.3379-.94837-1.3521-.9016-.2091-.9645.6277-1.2194-.4508-.87095-1.0623-1.129.1771-.56128-.66-1.0548.048-.89998.8369-.46774 1.0625.89516.6761-.18711-.048-1.4596.8369-.33548 1.5453-1.3758-.2254-.71935.4669-1.1032-.4508-1.1322.1127-.45967-1.2555-1.121.6599-1.379-2.0925-1.3516-.66.76611-.7725-.71934 1.2072-1.7419 1.175-1.3097.4668.15972.3703 1.8.5311.84031.6117.24354.8371-.18225.7564-.61291.7726-1.4661 1.0303-.60322.7725.0403 1.1913.51128.7242-.53386.3542-.62902.4667-2.2177 1.1428-1.1597 1.4971-.99838-.338-.95643-.8049-.44838-.097-.49838 1.5776-2.9258-.322-.62904-1.3683-.008-.3379-.74678.1288-1.3903-.66-.74355-.2735-.9403.354-.42419.016-1.3951.5634.22418.9498 1.3984.161.75805 2.0281-2.2355.3058.16775 2.0926-3.9112.9496-.21773.1771-.94355-.8371-1.1661.3864-.9774-.6277-.32419-1.175.10325-.064-.5129.7888-.57581.6117.48226.4184-.70322.8532-.47741-.3059-.93547.048-.80967-.5312-.15971-.048-.9887.499-.52419-.2575-.66935.6759-1.1113.7083.51935.8853-.43225-2.0764-2.3661.064-.26774 2.318-2.4435.5794.60482 1.1911-1.0226-1.0302-2.2451-.5795.0419-1.7867-1.7742-.6438-1.2613.8692-.2516 1.835 1.479.8371.1758.4989-.31935.4024-.90159.4989-1.7435-.064-1.0274 1.6418-.39193.9337-1.0016.3701-1.5838.499-.73547.8209-.58387.4185.14681 1.0463-4.3354.5795-1.9548 4.7483 1.3468-.097-1.7338-.2415-1.1887-1.658-1.5048.7083-1.3822.837-.53548 1.8511-.0178.2093-.71128-.499-.53869 1.0785-2.2048 1.7222 1.4726.5634-.58386 2.1731 1.8145 1.658.38709 1.175-.01 1.8028.39838 2.5915.8274 2.3822-1.2774 2.8331 1.5193.1771 2.1016-.8854.78386-.048.84677.66.34839.3381 1.1532-1.4327 1.8177-.4508 1.3532.161.62418-1.0784.4387-1.5936.2742-.7083.40967-2.2856.1758-.7243.93387-.08 2.5742-.821 1.3742-.6439.002-.3379 1.2129-.7888.20968.6922 1.1048 1.6741 1.4113 2.6719-.61774 1.6902 2.5742 5.5049-.60968 1.6419 1.2548 6.8571.9403.6438.0113 1.4809-3.237-.4506-1.5613-.7566-.55805-1.5453-.64354-.6116-1.029-1.1268-.64194-.998-.2387-.1931-1.5032 1.1589.5258.8691-.13552 1.7708 1.0484 3.0422 2.2177 2.1569 2.2145.9818-.17097-.7726-2.0919-.5473-.97579 1.7706-1.5774.7888-.15165.8048-1.1806 2.0443-1.6064 2.3822-2.6484 1.3843-.14197 3.0261-1.179.4347-.49193 1.175-.0694.5473.21775 1.2716-.51128 1.5775.13067 1.674-.31773.9015.34676 1.2394-.0774.7243-.45161.4185-.90482 1.4004-1.0177.5473-.0565.837-.83385.7725-.31613 1.2716-.0774.7083-.70806-.161-.54677-.6922-.48063-.048-1.1403.7727-.88225.9174-.60966 1.658.1468.9979-.30966 1.4004-.1871 1.0462-.94998 1.4005-.86451 2.1891.0823 1.9155 4.0516 2.9134-.40968 1.1267-1.0322 2.2697-.22257.6921-1.7742 3.9115-.61773 1.8511-.28065 1.2394-.90482 2.1731-.48065 2.865.0419 4.1208.86449 1.7705.61936 1.4971-.41291 2.8167.80806.66.53064.3059.87418-.048 1.8242-.2735 1.9177.4345 1.529.8852.73223.483 1.4694 1.6901 1.779 1.2555 1.7903-.161.73708-1.2716 1.429-1.4003 1.2548-1.4809 2.2709 9.5452 5.9435 1.4165-.43709 4.1046-.05 2.3662 2.4242.6599-.59193-.1449-1.1016.4024-.89192.6438-.22579 2.7043 1.5516 1.0141 2.3209.1127 1.9338 1.9316 2.1129 1.352.34193 1.8512 2.5951-.1771.93869.4667 2.8742-.676 3.1032-.1771 4.0983-1.2233 3.5112 1.3682.54676.8692-.11938.5312.33064.8532-.29999.7082.67095 1.5774-.21128-.7727 1.5709.064.72419 1.1108 1.5822.5633 1.6596 1.0784.44677 1.8028 1.2855 1.9477-1.4758 2.0765 1.1774 2.8169 1.9451.3541 1.1839-.064 1.7226-.7082 3.6806.5633 1.2371 2.5273 2.0048 1.4325 1.0097 2.0443.27256 4.0402-.27901 1.7384.61611 1.6902-.46935.499 2.5467.8691 1.6822.998 2.5161 1.1267 1.2855-.9657 1.2597-2.0603 3.7999 2.2695 3.2354 1.0302.61613.8853.98063 1.5936 2.2403 3.6699.15326 2.2375 1.8596 1.9638 1.8226 2.8489 2.2371-.9335 1.0919-.5472 6.6547-1.143 1.6564-.9818.96773-.5472 1.4322-.7888.55-.7888.20161-1.9959 1.1629.5955 1.1854-.4184 2.0855 3.2031 3.4467-.9014.96127-.3863 2.3322-2.7847.36128-5.8591 5.1209.032 1.6274.161-.0726 4.5714-.44354.5633 5.2386 1.1912 1.7451 1.5614.63065.1932 2.4919.6599.33065.6439 1.6193.7403.37257-2.35 2.408.016.46774.7404 1.1532-.3701 1.1903-.5152-.68387.5152 8.5192.7564 1.0355.1449.55644-.1771 1.1371.2898.27096 1.1428-.11293 2.4627-.66449.2576-.35162 1.0623.5758.9498-.58709.8852.26451 1.2718-.24031.354.7887 1.1267.47418.5634 1.1468 1.2072.8032-.6598 1.5855-.6118 2.7516-1.5935 1.829.1932.88062 1.513 3.1306.4025 1.3629 1.3843.14842.1288 1.7435 2.157-.15811.4668-.21129.515-.21127 3.7345-.47258 2.2373-.0904 3.171 1.0226.5956 3.6983.7565 1.3919.1449.8274.8532 1.758 1.7867 2.3919-.499 1.4064.1931.44678 1.9476 1.3838.7244.33065.7888 1.0371 1.0623.45644.483 1.1097.853.82256-1.6418 3.3484 3.3159 3.3161 4.5553-1.4096 2.8168 3.1096-.7886.36451-.4347 1.1016-.1127 3.1726-.2414 1.8064 1.1589 2.008-1.2394.78546-2.3822 2.5516 4.8611 1.1258 3.2997-3.9322 5.2958.31614 1.8189-.15326.4345.25483.097.75966 1.0303.80161 1.3681.0532 1.2555.83708.5152 1.4935 1.4646.83063.2415 1.5274.2094.33546 3.2514 2.0403.7566.3371.9335 1.0387 1.1106.25483 3.2032 1.7403.4186.56611-.2737.8.8371.67256.3218 1.229-.161.80806.499 1.5387 1.2072.31128.8048.70646 2.3501-.38227.515.21936-.2896 1.0822.4345.6242-.1127.8903.5956.83064 1.1429.12906 1.1429-.18709.6438.25806.5473 1.4838 1.2555.28549.837 1.1871.2092.71612.982.39838-.3865 1.758.2415.83063-.8692.39838-.048.59677.6116.34193v.7129l.7083.51451.1449 2.2983-.4345 1.1371-.048.82095-.4024.53548.081 1.0806-.7244.92257-.1771 1.1854-.6277.60484.354.59193-.6438.83547.1449.98547.5955 1.2984-.1449 1.0468.3381.52903 1.0301.4387.6439.83224.66.32097.4508.72418 1.3199.9903.4506.10002.1771 1.5968.8047.49355.016.84515 1.1269.72578-.064.98064.5151 1.5984-.5795 2.629.097.95966.338.71612-.097.79032 1.0302 1.5064-.4186.69999-.016.94191-.9013 1.829.1931 1.0516-.9496 1.4322-.9015-.18064-.8047.24032-.7727 1.4193.097.95321-.676.7887-1.5131-.0903-.7083.6758-1.0945.18387-.2254.72741-.8371-.079-.7242.80483-.081.57741-1.5131-.50644-.4668-.52257-.9658-.13068-.5956.6887-.6921-.15649-.5473.41935-1.3843.2742-.338.30805-1.2233.071-.9658.70321-.9818-.10164-.821.19839-.4668-.56613-1.3682.44192-.4669-.55805-1.368-.56127-1.803.76772-.9496-.23708-.6599.17257-.6761-.65645-1.6097-.0903-2.9134-.51935-.8854-1.3758-.8369-.16936-.7565.64837-.8532 1.308.016.60161-1.0784 1.3338-.2898 1.2742-.9496.56612-.5635.69192-1.0623.22581-1.6418-.39354-.821.10163-.3864.47581-1.6578.52257-1.32-.10325-1.2072.9371-2.8169-.6242-1.1106.83387-1.2716.34838-.66.7145-.7243.38709-.7727.0484-1.1589-1.0032-.2093-.40484-.9335.0387-.1449-.51451-.6278-.12745-.5472-.67741-.5473.36773-1.2394-.21612-1.3682 1.6193-.6761 2.0613-1.3199.23548-.7727-.43386-.5472-.96934-1.0462.26128-2.3502 1.6758-1.3199.0226-1.5452.66772-1.5292 1.0516-.7244-.0774-.7887 1.0903-.5473-.0226-.3218-1.1903-.9981-.42579-.9335.82418-.8049.26612-.4506-1.0322-.5634-.28226-.7082.57257-1.5614.19355-1.8189-.11616-.1449 1.7032-1.4487.39354-1.5935-.21936-.1127 1.1532-.7727 1.021-1.2233.47579-.8853-.24192-.5795.6274-.8208.35162-.4186 1.4113-.1771.59032-.9013-.1452-1.1428.32097v.55322l-1.3843.34031-.7244 1.0919-.064.66127 1.7545 1.371.9175.23388 1.0784-.3371 1.9477-1.5097.7244-.0484.064 1.7887.2737 2.0419 1.6578 3.3903 4.7163.27742-.064 2.15 1.9477.1452 1.0945-.39032.4185.44193 1.0141.20484 1.4971-.17582 1.9637-.77418 1.9636-.30967.6278 2.4774 1.0625 2.6612 1.529 3.4338.3703 5.887.338 6.1338 7.6459-1.45.2253.8645.2254 3.6354.6277.092.3863 6.4096 2.0443-.77418 3.5735-3.5193 3.0261 3.3161-.4185 1.5693-.7405 1.4161.2575.46613.9498.71933.7082 1.471.9013.67418.3542 1.0758-.9658 1.3548-.8852.66612 1.5934 2.8419.8371-.0613.1932 6.3467 6.5672-.72257.2254.88708 2.6559.14358.064 3.6225 1.9799.74837 1.0945.99838.161 2.0532-.4667.86451-1.143.47419-1.4969-.003-1.6419.84999.081.80321 1.9799 6.3854-1.7867 2.6532-.032 2.7967-2.4949 2.8-1.4648-.78708-2.4627.18709-.7083 1.7968.2254.33064-.8693 1.008-.676.41936-.2415.81289-.177 1.6484-3.2837 1.879.161 2.1661 1.4166 1.3387.8853 1.8.161 1.7129-2.479 1.3.4348 2.3838-4.4426.74032-2.0443.44999.7082 1.6822.8208 1.4919-1.014.87901.097.34839-.9819.39516 1.4809 3.1483-.1288.53871.3703 1.7726.064 2.0274 1.4003.0952 1.0946-.13391 2.334-1.1629 1.0302.84031.2575.68224.9175.16936 1.1428 1.1806-.064.38709.9176 2.0322 1.2233 1.021 1.3682 1.879.2253-1.8274 1.3521.4032.7727-1.479 3.0421.70644-1.8349 5.6709.8048-.10809 1.481.78548 1.9315-.64354-.1771-1.1564.6117-.56935.7565-.12422.2414.9403v1.25l.4508.35484 1.0784.14842 2.672 1.579.9015.24999 1.1267-.0597 1.7706 1.2661-.1932.74678-1.336.57095.2254.86774 1.1106.19677.6116.61611.048.94355-1.6256 2.1225-.9659.58709-.8691.99191-.8532.39516-1.5775 1.2694-.2574.97902 1.014.84031-.032.74837-.5795.48871-.9496.11293-.161.56773.8049.8774.2413.86612-.515.58709-.9979-.4129-.2416-.55967.4185-.89514-.2897-.56128-1.336-.57097-.8531.64515-.8049.19516-.6438-.26934-1.2234-1.15-1.4004-.62095-1.4968 1.9403 2.1247 5.1048-1.8512 1.1177-.3218.78386-.016 2.2387.3057.81936-1.2877-.23227.064-.64192-1.2233-.86774-.9979 4.4629-.6761 2.3467-.676-.0645-1.4005-1.4661-.7243.41452-.3541 1.0064-1.2716.002.016.89192-1.2877.35323-.097.85644-.7566.3129-.6116-.0758-.4829.47742 1.4808 3.2709 3.1388 1.1306-.9013 2.8451-1.3521-.4371-2.7526.61613-.5955.2516-.7888.86935.1449.54999.7405.59031-.6439.60806-.4506 1.5935.161-.48387 2.0925.61452 1.4005.24031 2.5754 1.5887 2.1248 1.5161 3.1226 1.8161 2.656.93064 2.2695 2.0016 3.5896 2.7338 3.4928-.29193 3.2354-.36774 2.3019-2.3693 3.9597-4.1709 3.8793-4.3193 2.6076-2.1645 1.1911-1.2887 3.7666 1.0613.9657.37257 2.479 1.2951.8852.71612-.5634 1.1887 5.4085 1.9548 1.5773.7387 1.9477-2.3677 1.0142.90483 1.3038.8871.1127.60481.7403 1.0532 1.8029 1.1048.7725.0242 1.5615.77902.9658.87256 1.0784.30324.5312.7016 1.4809.36773 3.8631.65806 2.5433.0435 1.2877-2.0161 1.3682-2.3758 4.6036-.008.7886.78063 2.8652 2.4806 4.2172 3.0016 2.6882 1.7935 4.9095-5.0467.4828-.6v-1.85l.2897-1.008.8853-.0452 1.0946.98224 3.0101.56451.7405-.2984.8691.15649.9014-.23708 1.1428.01.8532.56612.9174-.10002.9176.20484.4506.4129 1.1589.23547.6118.43065 2.2535-.23065.3381.82902 1.0301 14.572.3057 4.6677.1288.44515.097.66129 5.2475 6.9709 7.34 3.9435 3.9115-4.6209 1.4485 1.4468 3.5574-.40484 1.1751-.0436 1.6739 1.4451 2.5754.73548.9176-.20968 1.1106-.67256.3703-.48064.2736-1.15.9819-1.6629.9979.74838.6922 1.429 1.2555.83386.4025.61289 1.3199.30484 1.3681-.55968.5796.45484-.161 1.3774 1.2072.4629.2254.43225.9657.50482 4.4426-.05-.032-3.5016-.3379-.85161v-1.5419l1.4165-.43063 2.0924-1.9548-.3057-.91451 4.4587-3.4064 2.7364 3.058.9818.26611.9498-1.429 1.0462-.46451 1.0623.10809 2.833.87742.7727-1.3548.6922-.51934.3218-1.021-.3218-1.3258.8691-.66774 1.6258-.40806.9014.19999 1.8028.12745 1.6579-.20483 1.658-1.0903.8208-1.408-.081-1.4.3059-1.0048.7888-.42902 1.3521-.021 1.0623-.42095-.2254-1.6387-.338-1.1903.4668-.47741 1.2877-.46451 1.7867-1.0371 3.5574-1.4484.5472-.33871.9337.59677-.1288.71934 2.8812 1.2516.5955.0565 1.8191-.60161 1.0301-.8 1.0462.16614.483.35.4989 1.2193 1.7384 1.5677.5473 1.2452 1.2555.7258 1.3038-.11777 1.5453.87095.2093 5.6161 1.3682-.66129.9496-.96127 1.0464-.42097 1.014-.72741.3702-.82579 1.4165-1.0935.3381-1.1871-.5313-1.3258.2898-1.0677.676-.91449.338-1.1403.8532-.63547 1.5292-.67096 2.4305.75161 5.4729-1.0419 2.2856.70966.9979.5758.5474-.75644 3.7343 1.6193 4.4104 1.7693-.032 1.0113-1.2877.42902-.1288.28549-1.5612.90321-.5312 3.1661.4024.63063 1.0784.63386.1771 1.3871-1.3038 1.5129-.8854 1.2516-1.2233 1.0419-.064 1.0661.1932 7.6192.982 1.3129-2.9619 2.3709.4507 1.5387 1.4004 1.7742.7243.30161 1.2878.99192.7243 1.1129-.1771.5258-1.1589.71935-.1771.48547.483 1.5548.7725.59999.5635.84193.4829 1.4193-.5795 1.25 3.2515 1.1629 2.3339 1.3919 1.4488.64354 1.7544 2.0419-1.6256.85806-1.1913 2.8274-.3058 1.6758.4829.94353v2.2451l1.0142.12584.3218-1.0242.7566 1.1919 1.1428.7887-.8852 4.8144-4.7646-1.471-2.0765 3.4258.6921.0436.9176.53064.7564-.58709.3381.33064 1.3843-.73709.7888 1.3468-.1932.64192.5472 1.2903.8532.38709.8047 1.4097.9015.46772.2254.80645 1.2555 2.2806-.081.51935 1.0462 1.4484.8371.77741.161 1.1097 1.7061 1.029.8854-.56612 1.0301.71128.2576 1.0161 1.1106.41774.1449.42097 1.0301.16133 1.9316-1.9258.4829-.60483.9336-.0387-.097-.53709.3703-.62257 4.1045-2.6242.322-1.0806 1.1428-.4629 1.4971 1.4596.6599-.22418.4346.28226-.1127.86288 2.173-1.5564.145.48549-.4187.88385.6278.82579 1.5936-.0871.7405-.32257.1288-1.2145-.7081-.92094 1.2394-.33064.5473-.99999 1.7061-.05.4185-.76773 1.819-.14681 2.35-1.9984.2254-.74838-.2415-.50967 6.181.23388-.4024 1.0951.5151 1.3629 1.9316 1.1064 1.2877.8774 2.672 1.5484 1.2072-.59355 1.2716-.95643 3.3964.11293.6922-.45322 2.4144 4.1854.6278 1.3903.7887.15487 1.4004-.70966 1.7062 1.8709 1.2394 1.0355-.1769 1.4774.1127.84031.5313.0613.3541 1.4016-1.4005.14035-.032 1.6629-.8852.47258-.097.80965.7888.14843.193.99997 1.1269-.0226.4024 1.0484-1.2234.86289-.2415.62097-2.4788-.042-.1932 1.2935-2.6559.15327-.338 2.8629-1.8671.54515-.1128 1.121-1.2555.10648-2.9777 1.4-2.7848-.35484-2.157-.5129-1.8832-.70321-1.014-.85483-1.0786-1.4177-.6278.33064 1.5937 2.108.6921 2.608 1.5613 1.4968-.6117.54354-1.4002.58709.7564 1.6516 2.0925 1.8677.5312-.0307 1.6741 4.7193.3219.18064.4828 1.1935-.2574.45644-.982.49838-1.0784 1.5387-.2896 1.6-1.5454.15488-.4828 1.8726.3862.2871-1.2233 2.2984-.3862.26128-.161 1.7564-.9337.4629 1.9155 4.9919 1.3521.24838 1.5131-.3758.4185.94676.6921.4516 1.7062-.0887.1932.40805 2.6881-.62418 1.8833.071-.3219.8774-1.1912 2.0032 1.8995.92418 3.7504-.0823 1.2395-.38225-.081 2.0387.7243.48709 1.4165 1.6.4346 1.7484-.6761.16289-.7887.6387.016.76289 1.7544 1.5726-.4345.38064-5.7786 2.6887.3381.76934 1.7544 3.2596.4185.4274 1.6902 1.0452 1.6418 1.2613-2.0765.85806-1.7384 1.0661-1.3521 2.0854.7566.9887.9818.35323 1.5775.85322.7566.1581 1.1106-.22257.9658.81127.5956 1.9209 1.2233 1.571 1.7223 4.4967.1449 1.1113-.064 1.4613.1288 3.4854-.064.85967-.7566 3.1467-.8209 1.5564-.853 3.508v1.05l.2735 1.1097.9659 1.5161 1.4002.70646 3.3159 1.2516.483.70967 2.8168 2.7725 1.1589 1.2645 1.0142.37579.8693-.0613 1.4002-.40484 1.9477-.0565 1.3521-.54515 1.5936 1.4548 2.1087 1.7645-1.5775 3.5838-.6761 1.7516-1.7383 3.779.7082.72902-.048.55483-.7083.78386-.9819 1.4129-.032 1.0903.3381.25967.7082 1.2952-.5472.93869.048.44031-1.3199.36775-.7405.53385 2.4466 3.9387-1.5131 3.7516-.081 2.5-.3701.90644-.8049.12422-.6277.88708-.1288.74839.4186.46773.048.76289-.2576.74353.081 1.1468.5311.80482-.1127 1.1339-.676.83225-.1128.75321 1.2074 1.7177 2.0602 1.5193 2.2697-.40482 1.6418.42579 1.0303.46128 1.014-.0565.4669.29031-2.3824 3.3984.4506 5.016-.8691 1.2016-1.6902-1.021-2.9134-2.129-1.5131-1.2467-5.2636 2.6887-4.0561 2.0161-1.7386-.24355-3.1388.0403-2.1729-.34999-.9819 1.508-1.0462 1.171.048 2.5225-.2738.75484 2.7365 4.2322 2.7686 7.6757.4185-.68548.7726-.33547.9818.1758-.5311 2.8338.7243.84031.4185.83547.6116.62419-1.3521 1.6451-5.36 3.7387-.6438 1.0322-1.1269 2.4322-.853.81772 4.8932 3.6177 3.1227 1.9822 1.8994 1.8032.7727 1.5258.097 1.3161 2.0442 4.5451-.161.41129.3381.75321-1.159 2.2032-.081 1.7258.3218.86128 1.0142.30322 1.2555.0532.2413 2.5903 3.2837 4.1677-.081.91612.4186.45484-.064.74999-.5955.6145.676.86774 1.0302-.05 3.1387 6.0354.7888.90321 3.525 1.2242 2.656 1.3693.7565.59516 1.2072 1.6226 4.2818 3.3064 2.1407 1.1677 1.3843 1.8645-.2735.52742 2.4305 1.0081.7888.0452.8047-.46935.4186.46935-.064.88224.2735.46935 1.0142-.15003.5633.74354 1.1751.17903 1.4809-1.4419.161-.91289-2.4146.5629-.1449-.98386 2.1246-2.2871 1.5131 2.75.7405.91128.2413 1.0645 1.2717 1.0306.644.94032.161 4.7225.032 2.2887-.9657.42902.064 14.497.3701 1.2484 2.3178-.308.9337 4.0451 3.7827 3.5257-2.7204 3.0838 6.3903 6.2048.676-.8129.7244.073 4.2657.7661 2.8811.4548-1.014 1.8419 3.6861.9452 3.1227.7371.6599-1.9887 2.7525.7742-1.0784 4.5032-1.4809-.1275-.2415 1.5048-1.0623.1468-1.2716 2.2081-3.4125-.4581-1.2394 5.9531-1.2877-.04-.1771 1.1484-3.5412-1.4968.064-.6822-2.3824-1.0903-1.014-.9952-.2415-.4548.6922-.3516 1.0142-1.0323-3.3803-.6451-1.336-.037-2.7848-1.0371-1.9799-1.0516-1.5451 1.5693-3.8632 3.1209-3.8953-.5758-1.6097.2017-6.2293 1.0499-3.493.4178 5.1026 6.2321-.2897 1.5597-.7887.039-.4024 2.1984-.4669-.6484-.9335 1.8387-5.3441-4.0483-2.1087 2.9757-4.1205-2.8225-5.8914-4.1758.2254-2.208-5.344-.8274-.7083-2.2258-2.8813-4.5854-.5151-.6887-.9818 1.0258v.7306l-.6277.242-.7566.7822.048.8532-.6438 1.0226-.66.4935.032.6807-3.4608.8919-4.7324-.7371.3059 3.7774 1.336 2.2548-.8048 4.7064-7.0503-4.9322-3.3964-2.5726-3.2515-2.3161-.5311.2097-2.5593 1.7871.7243.8451-4.7968 6.5661-1.7867 2.5064 7.5653 4.937 1.481.3694-.2414.9628-.6278.5775-3.0101.9322-1.6579 1.4387-2.7364 2.0209-7.4205-1.0741-1.4003-.097-.048.6838-1.0142.8661-.4506 1.8855.2093.8935.081 1.4516.2413.8177-.8692 2.6242-.016 1.3048.4345.6968-.081 1.5242-6.0362-.8291-.7566 3.45-.9335-.2887-4.2977-1.3097-4.2012-1.4096.2898-1.0436-.6278-.1016-.7726 2.5225-.6117 1.5758-.4347-.1081-7.7746-3.5983-3.5733-2.0467-5.7625 6.9144-3.171 2.5919-.5795.5661-1.9315 1.4596-2.978.5129-1.1428.2968-5.0542 2.6532 1.8027 2.2484-1.8671 1.5951.7243.4516.064.421-.8853.5032-.3219 1.9548-1.3521 1.0306-.1449.3758-1.0301-.2419-.9337 1.6048-2.2858 4.2725-1.0462 2.3452-.7565.4209-2.656-.5403.6761-2.9145-.2897-2.3096.3863-.6371-3.2998-.7339-2.2856-.8645-.7244-.031-.6921 2.608-.7888-.2097.097-.65-.5473-.4112-.161-.6613-2.1729-.392-2.1409.3694-1.9315.1839-3.4286-1.0371-.5956.047 1.7384 5.2951 1.1752 3.816.048 1.7484-1.4003.3887-.8693.708-.7082.2339-5.5049 1.1226-.2415.092-4.1852-1.187-3.3157-.8887-2.6237-.7823-7.5816-.8693-2.2534-.2903-2.672-.2226-.4829-.1694-1.4165-1.1758-.322.3646-1.2072 2.4015-2.6399 1.3081-1.2394-1.2145-1.4646-.6226-4.1691-.063-2.0604.3371.6761 1.9903-5.1992.6209-4.2011 2.2903-.081.5162-3.686.4854-.3542-.5951-.7405.8258-1.8027-.1436 2.2374-3.05.2575-2.2032-3.9437-1.0661-2.2212.9613-.9658 1.0758-.66 1.8629-2.1248-.3758-.515-.4178-1.2233.7758-1.3844.4565"></path>
            </g>

            {/* ./MAP REGIONS */}

            {/* NAME REGIONS */}
            {regionAkhtyrsky && <AkhtyrskyName />}
            {regionSumsky && <SumskyName />}
            {regionRomensky && <RomenskyName />}
            {regionKonotopskiy && <KonotopskiyName />}
            {regionShostkinsky && <ShostkinskyName />}
            {/* ./NAME REGIONS */}

            {/* NAME GLOBAL REGIONS */}
            <g
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth="1.6113"
                transform="scale(.999 1.001)"
                fill={regionSummy ? '#fff' : BLUE}
                fillOpacity=".94118"
                opacity=".85"
                aria-label="Сумська">
                <path d="m3172.8 704.51q-3.8363 0-6.066 4.4922-2.1969 4.4922-2.1969 12.493 0 16.657 8.6892 16.657 3.8036 0 7.9678-2.4264v7.935q-3.5084 2.328-8.9843 2.328-8.0989 0-12.46-6.4267-4.3282-6.4595-4.3282-18.133t4.4593-18.198q4.4922-6.5251 12.46-6.5251 2.6231 0 5.0168.72137 2.4264.72136 5.1807 2.5248l-2.951 7.2465q-1.4756-1.0165-3.1478-1.8362-1.6723-.85252-3.6397-.85252z" />
                <path d="m3183.7 708.81h9.0499l5.0496 20.625q.7541 2.7543 1.2132 7.7055h.1967q.033-.78695.2951-2.7871.2623-2.033.4263-3.1806.1639-1.1476 4.5249-22.362h9.181l-10.46 39.151q-1.9018 7.2137-5.0496 10.361-3.1477 3.1478-8.394 3.1478-2.5904 0-4.6233-.55742v-7.312q1.3443.39347 3.0166.39347 4.3938 0 5.7709-5.7709l.623-2.2953z" />
                <path d="m3255.1 745.33h-7.8038v-29.674q-.9509 5.3119-2.6888 11.935l-4.7544 17.739h-7.4104l-4.7545-17.805q-1.5411-5.7381-2.6887-11.87v29.674h-7.64v-36.527h12.558l4.4266 17.05q1.4427 5.7054 1.7378 10.624.1311-1.6723.6886-4.6889.5902-3.0166 1.3115-5.9349l4.525-17.05h12.493z" />
                <path d="m3274.5 745.99q-6.5251 0-9.9352-4.7545-3.4101-4.7545-3.4101-13.968 0-9.6401 3.2134-14.395 3.2461-4.7545 10.001-4.7545 2.033 0 4.2627.59021 2.2296.59021 4.0003 1.705l-2.492 6.7874q-2.7216-1.6067-4.8201-1.6067-2.7871 0-4.0331 2.9182-1.2132 2.8855-1.2132 8.6892 0 5.6726 1.2132 8.4924 1.2132 2.7871 3.9675 2.7871 3.279 0 6.853-2.2953v7.6727q-3.4429 2.1313-7.6071 2.1313z" />
                <path d="m3296.1 723.1h3.0822q7.3121 0 10.755 2.6559 3.4757 2.656 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.722zm8.3285 10.886q0-2.328-1.4099-3.3445-1.3772-1.0165-4.4266-1.0165h-2.492v9.181h2.6232q2.7215 0 4.197-1.082 1.5083-1.1148 1.5083-3.738z" />
                <path d="m3337.1 708.81h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
                <path d="m3368.6 745.33-1.7379-4.984h-.1967q-1.9346 3.2134-4.0003 4.4266t-5.2135 1.2132q-4.0331 0-6.3612-3.0166-2.2952-3.0166-2.2952-8.3941 0-5.7709 3.1478-8.558 3.1805-2.8199 9.4761-3.115l4.8528-.19674v-2.6232q0-5.1152-4.4265-5.1152-3.279 0-7.5416 2.5576l-3.0166-6.0332q5.443-3.4429 11.837-3.4429 5.8038 0 8.8204 3.3445 3.0494 3.3117 3.0494 9.4106v24.526zm-7.5744-6.1644q2.3936 0 3.8036-2.1313 1.4427-2.1641 1.4427-5.7382v-3.0822l-2.6887.13116q-2.9838.16394-4.3938 1.705-1.3771 1.5411-1.3771 4.5905 0 4.5249 3.2133 4.5249z" />
            </g>
            {/* ./NAME GLOBAL REGIONS */}

            {/* Mines */}
            <Mines x={3160} y={780} text={day.covered_territory} />
            {/* ./Mines */}
        </>
    );
};
