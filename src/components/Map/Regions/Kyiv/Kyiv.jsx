// Components
import { useSelectRegion } from '../../../../hooks/useSelectRegion';
import { useRegionColor, useDistrictColor } from '../../../../hooks/useRegionColor';
import {
    DISTRICT_STROKE,
    DISTRICT_STROKE_WIDTH,
    REGION_STROKE,
    REGION_STROKE_WIDTH,
    BLUE,
} from '../../../../variables';

import { KyivG, KyivGName } from './District/KyivG';
import { Pripyatsky } from './District/Pripyatsky';
import { Obukhovsky, ObukhovskyName } from './District/Obukhovsky';
import { Vyshgorodsky, VyshgorodskyName } from './District/Vyshgorodsky';
import { Buchanskiy, BuchanskiyName } from './District/Buchanskiy';
import { Fastovsky, FastovskyName } from './District/Fastovsky';
import { Belotserkovsky, BelotserkovskyName } from './District/Belotserkovsky';
import { Boryspilsky, BoryspilskyName } from './District/Boryspilsky';
import { Brovarsky, BrovarskyName } from './District/Brovarsky';
import { Mines } from '../../../Mines/Mines';

import { useMinesInfo } from '../../../../hooks/useMinesInfo';

export const Kyiv = () => {
    const regionKyiv = useSelectRegion('Київська область');
    const regionKyivG = useSelectRegion('м. Київ');
    const regionBoryspilsky = useSelectRegion('Київська область', 'Бориспільський район');
    const regionBrovarsky = useSelectRegion('Київська область', 'Броварський район');
    const regionBuchanskiy = useSelectRegion('Київська область', 'Бучанський район');
    const regionBelotserkovsky = useSelectRegion('Київська область', 'Білоцерківський район');
    const regionVyshgorodsky = useSelectRegion('Київська область', 'Вишгородський район');
    const regionObukhovsky = useSelectRegion('Київська область', 'Обухівський район');
    const regionFastovsky = useSelectRegion('Київська область', 'Фастівський район');

    const { day } = useMinesInfo('Київська');

    return (
        <>
            {/* MAP REGIONS */}
            <g
                fill={useRegionColor(regionKyiv)}
                stroke={DISTRICT_STROKE}
                fillOpacity="1"
                strokeWidth={DISTRICT_STROKE_WIDTH}>
                <KyivG color={useDistrictColor(regionKyivG)} />
                <Pripyatsky />
                <Obukhovsky color={useDistrictColor(regionObukhovsky)} />
                <Vyshgorodsky color={useDistrictColor(regionVyshgorodsky)} />
                <Buchanskiy color={useDistrictColor(regionBuchanskiy)} />
                <Fastovsky color={useDistrictColor(regionFastovsky)} />
                <Belotserkovsky color={useDistrictColor(regionBelotserkovsky)} />
                <Boryspilsky color={useDistrictColor(regionBoryspilsky)} />
                <Brovarsky color={useDistrictColor(regionBrovarsky)} />
            </g>
            {/* Contur */}
            <g
                fillRule="evenodd"
                stroke={REGION_STROKE}
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeOpacity="1"
                strokeWidth={REGION_STROKE_WIDTH}>
                <path d="m2133.3 1497.8-2.157-3.0322-13.94 2.6129-6.0362-8.5644-2.6398-2.887 3.847-1.2903-.354-2.242.8047-.081.4669-.8225-.1449-.7581 1.2394-1.1773.7082-.1452.6439-.5484.032-.4356-1.9638.9033-1.5614-.4515-1.2394-1.1453-.9013-.7095-2.3502-.484-2.1407-1.8871.354-1.1612-.064-1.613.8532-.387-1.497-1.9839-2.8331-3.5159-.7886-1.3387-.5474.5322-1.0462 1.6128-.3218.9355-.322 1.9193-.161 2.5322-.6761 1.871-7.2111-5.0806-3.8311 1.758-1.9475-.3709-.5796-.4677-1.1911-1.6775-1.4969-1.4193-.6116-1.129-1.4005-.9999-1.6419-1.6291-.2413-.4032 2.189-3.4193-1.4326.048-.5634-.6452.3864-.7419.7405-.629.1449-.9356-.5151-.9676-.032-1.0645-.4989-.9194-1.1428-.8226-.7888-3.6773.3863-.629.8692.081.5956-.4515.1127-.9356 1.014-.629-6.696-4.9031-3.3159-1.5323-2.0765-.8871-.5472.064-.4829 1.129-.5795.5485-.5957-.5162-1.0945-.4677-1.0623-.1613-.9337.3549-1.9154-.2582-2.8329-.6451-.8049-1.3064-1.0946-1.3387-.338-1.4838-1.0784-1.4193.338-1.7259-.338-1.9678.064-1.6773-1.0464-1.887.306-.2098.081-1.5321-1.0947-1.6775-.177-.5483-1.7063-1.3549-1.7061-.5483-.3543-2.6129.016-.7419.4187-2.1677.3057-.076.9981.1984-.7244-4.9999 1.2877-.321 4.0081-1.1903 2.7362-.7177.6761-.2774 1.0947.031 1.4968-1.8741 3.8954-3.3161-1.0623-1.3161.2576-.1581 4.2494-4.4064-.8854-1.7968 1.7546-1.2322 1.0623-.5984 3.2354-2.1726-.4506-1.0048-.9659-3.5161-.5955-.021-3.3642-1.4936-.3702.037-1.6258-1.2419-.5956-.3048-1.2555-1.1484-2.2051-3.8935-.5152-.7951.4669-.2823-1.6419-2.9628-.6439-.2468.2576-.8145 1.0623-.057.7727-.4177.5472-.8645.048-1.3.4184-.8048 1.0142-1.0177.5794-.044 1.3843.3129.5151-.3339 1.4165.3387 1.0945.7113.8693.2903 1.0301-.4613-.1931-1.9725.4185.023-.1288-2.5355-2.4627-.1565-.4346-.1355-1.143 1.6435-1.0784-1.5725-4.0724-4.6613-2.9939-.9725.9337-4.5645.9174.2533-.6439-2.5645-1.5292-.1226-.9013-3.4919-.2898-1.4564-.3863-2.8387-.3381-1.9677-.4989-.9629-7.839-11.948 1.6902-1.121-.7404-1.0838-1.7064-.3581 2.656-3.3564 1.3199-1.7967-.8047-2.8048 2.9133-1.8903 2.0604-3.5 1.2233.65.9015-2.2677-3.4286-1.3806-.2254-.1984-.1127-1.5645-.5312-.5129-3.6216-1.4548 2.1729-5.579-1.1911-.408-5.2795-2.071.1288-3.8709.4347-1.0096.2092-1.2678-.4668-.053.161-5.5403.1449-3.2354-.1449-.9209.3541-.6242.998-.6081.097-1.3613-.8209.3307-1.2072.1307-1.3199.4225-4.6036-.3274-2.0765-.04-3.4447-.2194-2.688-6.5047 2.511-1.1677 2.3018-6.1564 2.3018-6.0064-1.0302-3.6693-.2897-1.3983-1.9476-5.0564-.5636-.8484-.692-1.6451-.5796-1.8016-.3218-.6016-.7244-2.7597.4668-.053 2.1569 1.2113.3863-.421 5.2475-4.4596 1.6258 2.9177 1.0784 1.6806 1.9638-1.3016-.3541-1.2661 2.6076-1.7387-.3381-.6225.3863-.7742-.3702-1.471-1.1267-1.9177 4.8611-3.958.6599 1.1935.8854.5516 2.0443.7839.354.6742.8049.8709 1.4165.7791 1.6096.6451.9014 1.0774 2.2051-3.7161-.6919-.3387-.1933-2.6628 1.6579-.2452 1.4487-.3758 2.8814-.047 1.3199-.1951-.3381-1.1952 4.2012-.558 1.0301.1306 1.1267-1.2596.8049-1.179-.4667-1.4355.5794-1.0387.821-.958 3.2193 1.0999 1.3841.2646.4347-.642 1.0623-1.029.161-.6629-.322-.6919 1.3521-1.7451.6117.2661.6117-.5049.8209-1.1499.3703-.9.8208.2387.8371 1.0387.7405-.052.4023-.6113 1.0786.6129 3.0422-3.0016-4.2818-1.2468-.2091-.5016-.6761.2-2.157.047-1.1911.2919-.515-.084-.5956-1.987-.3542-.4403-.161-1.3791 1.4004.2823.6278-1.4403 1.8993-3.8032.4669-.4403 2.9939-1.1322 2.5594-3.6758 1.6097-.9274 11.782-6.3354 3.0584-1.5758-.7083-3.6854 2.6077-1.0661-.8693-2.479-.4506-.073-1.5615-2.7467-.7726-.5791 1.0141-1.0387 1.0462-.6467.3865-.6823-.5636-1.6709-1.2555.4935-.4023-.3693-2.0282.5661-.821-2.2516 1.4166-2.4967-.4024-.9145-1.0784-.8694-1.1269-.508-1.4326-1.7806-1.3519-1.3484-.5314-1.9871-1.014-.6467.032-1.2436.6439-.5806 1.2072-.6065.048-.8322-.9176.758h-.4345l-1.336-1.6532-.4507-.8016-1.2233-1.6581-.032-1.1919-.5151-.8967-.064-2.1903-.4991-2.1049-1.529-1.1032 5.3279-3.7063.3863-.992.5633-.1081.1932-2.0983.1611-4.6096.081-3.1677-.064-.3307-1.0625-1.3613-2.9134-3.5241-.7566-.8339-8.4184-9.8934.7244-1.0693.7887-.3742.4829.2371 1.1106-.4032 2.1731-.571.193-.55.6439-.429-3.7827-1.5903.9015-3.9483 7.6619-6.6983 1.0623-3.4532-.2897-1.2-.7404-.1419-.9498-.5339-1.1589-.3581-.9818-.6354-1.2716-1.2387-1.6742-2.2903-2.2212-1.3936-1.0785-.094-.5795-.271-1.0784-1.7354-.097-.6017-.8371-.879 1.1752-1.1774.3057-1.0854.4024-.4823 1.2879-.4258 1.0623-1.608.7887-1.5823 1.8833-2.1693 1.7545-2.6225.8048-1.8452 1.0302-2.0935.3059-3.1112.4345-.9855 1.0462-.8823.9015.1565.6921-.3371.9015-.061.8369-.6612-.676-1.1613-1.5774-1.35-1.2716-1.4226-1.1269-2.5612-.7886-3.6112-1.0786.3838-.6116-2.0645.3703-.2016-2.0121-1.629-.9015-.6032 2.1409-1.0177-1.0141-1.9807-.9657-.9806 1.8993-1.3645.982.679.7725 1.0903.322-.093.8371-1.3484 1.1428-.061.193-2.8935-3.0261-.2242-.6438-5.3112 1.7222-5.8096 2.3341.8242.1771-2.4274.2253-3.2032-2.8329 1.1742-2.1892.035-.6277-.75-.8532.042-1.0945-.7919-1.9477.6564-.3862-.8774-2.6238.039-1.7063-.6661-3.3159-1.6935-1.014-2.0242-1.3521-1.7532-.821-.3258-.6116-.6161.9014-.7387.8532.2339.6761-.4871 1.014-.3855.8048-.629.8208-1.3484-.3218-.958 1.2555-.9226.8371-.1694 1.1428-1.5596-.4507-2.9742-.9336-.5548-.499-.8855.9657-1.0612-.8208-1.1194-.7887.8403-.4026-.2129-2.3661 3.0339-.7404-.4597-.4024.6484-1.4809-2.55-.7244-.7468-2.35-.9161-1.0784.2162-1.9155-.087.097-2.4193-.7242-3.2274-.1449-.3499 1.1428-4.6161-1.5936-1.7806-2.6558-3.5048-3.7184-3.9112-5.9074 1.0548-15.243 2.8322.3542 3.7967-.6922.0532-4.6841.76613-1.7384.23547-3.2193-5.7999-.032-1.4113 1.7223-.64354.66.0161 3.8631 1.608.821.40323.6116-1.9951 2.656.53546 2.0763-4.3903 1.5131-1.5806.4828-.66128.4187-2.1822-.1932-1.5516.4184-.11616-.4828-2.637-.3541.11454-4.1851.2871-.998.16773-.048-1.1742-6.4868.28387-1.3682-.57419.5472-1.7806 2.2053-5.8419 1.6901 1.9048 3.6377 1.8806 1.658 1.1193 1.3843-1.5339.3863.20323 2.7686-2.1532 1.2394.72096 1.4487-1.9919-1.1107-3.6241-1.0945-1.8355 1.7222-1.6822-1.4968-2.9742-.032-1.5758 1.014-.4129-1.014-.96773-.9176.0113-.4023-.27258-1.7064-.55321-.8369-.78225-1.0302-.42097-.2253-.91289-2.3502-.4887-1.4326-.95645-1.1428-.48224-1.2716-1.1629.2415-.9387.7566-.84354.2735-.90966-.081-.63064.483-1.0887-.1771-.69514-.6599-.30001-.8049-1.3887-.2414-1.9032-.4025-.77579 1.7384-.36289.8693.65321.3381-.3629 3.2996.19354.8532.41452.2093.64838.837-.9258.8852-2.229.821-.59516 1.8511-.71289.2415-1.1484-.1127-1.3855-.8693-1.9226-.3057-1.0484.2413-2.1016.5634-1.5984.9497-1.3919-.5794-.8774-1.0625-.67742-.2896-.96127.1449-.5129v-4.0596l-.4348-.9887-1.1911-1.5306-1.4487-.84999-.2896-.55323-1.2072-1.4774-1.481-2.2564-.7887-.43709-1.1267-.27742-1.7384-.69353-1.4648-1.0113-.4185-1.0145-1.4487-.86774-1.1267-1.1419 2.8329-1.0822-.3863-1.3435 1.175-1.0758.6922.87742.8532.60805 2.1085-.88547-2.3178-2.0984 3.4285-3.058.66-.44515 1.5613-2.1016-.9979-1.3677-1.1269-1.0629.3381-.38064-.1288-.87579.3381.0742-.161-.39515.1932-.33226 1.0301-.0565.161-.64516.7566-.27096.193-1.1871 1.4165.57741.2415.65322.7727-.46774.5473.2629.4828-.55966 1.0301.54354.3703-.7774.7566-.41291.5955 1.0677.4668.0823 1.497-.71612 1.2233-.12261.66-1.6838 1.0945-.89676.2576-1.3161-.3059-.3371.5473-.69514-.8691-1.3693.161-.44838 1.6419-.88708.5472.0597.3863-.70805.837.0807-.3379-1.4564.5795-.43063.097-.94032.515-.40321.6922.0661.161-.65322.7726-.99838 1.0142.5371.4024-.37742.7243.18064 1.6257-.35.5635-.42579.6599-1.6516 1.0141.0952.1449-.5645.7404-.0113.6117-1.8145.7725-.4871 1.0785-1.6484.5956-2.0306.7405-2.9.7565-1.5726.5151-.41934.4506-1.5726-.3379-.93386-.4025-.21612-.7888.44354-.9657-1.6709-.5956-.69678.3058-.65805-.5795-.48709-1.3521-.34516-.2574-.31773.081-1.2806.2896-.3016.3703-1.2306-.048-.63065-.9819-.2774-.6117-2.1451-.016-.6871-.8371-1.1129.1128-.95484-.5312-.50644-.6922-.16289 1.0625-1.7548-.032-.72419-.7888-.32902.3541-.74032-.9657.0855-.016.43386-1.2072.042-1.1269-1.1322-1.014.57741-1.2716-.25-.7405-.59838-.016-.60966-.7726-.47097-2.1891-.1097-.7082.33387-.821 1.421-1.014.19516-1.3843-.1452-.7727.69837-1.5453.30322-.2413.37904.2252.74353-.2896.64999-1.4166-.10002-1.6578-1.0387-.9337-.071-.2254-.5258-.9818.37257-.1127-.79838-.9657-.16935-.8854-.40968-2.1569-.23386.048-.33387 2.7203.10648 1.497-.029 1.7223-.51612.9496.0484 1.5453-.16133.7083-.57418.1932-.52419v-2.0613l-1.1589-.17096.4667-1.3274.5473.18548 2.3339-1.6209.7243-1.4306-.9013-.65322-.7726.37903-1.6419-1.1161-.4185-.63386-2.3178-1.5951-.097-.7887-1.6097-1.4548.4828-1.1193-1.529-1.2113 3.3641-2.7693 4.3621.59838 3.3159 1.021 1.2555.77257 3.3481-.32419-1.3682-6.0322-1.9316-.65967-1.497 2.5403-8.4023-5.6273 3.3642-6.8918 2.9455-6.3451-2.0764-4.1161-1.6901-1.6209-1.7867-1.8774-2.0925-.99192-.5795-.0855-3.2515-3.8822-1.7383-1.9951.9818-4.6902-2.0121-4.1661-7.6458-7.6418-.8371-1.0887-1.1911.0678-4.9093-1.5032-.2415.0113.1932-3.2919.4506-10.092-.032-1.1952 1.5131.0581 1.4005-1.2129 2.8811-.54516 1.2878-.35805.7726.17902 1.4004 1.0435 3.0583 1.2048 1.8028-1.0032-.048-1.1532-.3864-2.2129-.08-1.9064.1127-2.9322.7726-2.1322-.5794-1.7016-.4668-2.1355.7081-.0678.9981-2.0548 1.3682-2.5064-.4508-.20968.982-1.1451 1.3682-1.8854 7.4848-9.6531-1.0141-1.5597-3.6701-3.9177-1.0784-.2871-1.9154-1.0419-.5473-.60643-.982-.59677-.6116-.82097-1.7706-1.9677-1.6095-.77418-.7727-.6629-1.1589-1.6322-.9498-1.6209-5.7625-10.261-.4345-.94354-3.8471-2.9032-1.2394-1.008-2.0443-1.4-3.4125-2.5048-7.1307-5.0612-3.1066-2.3225-4.8451 1.029-.3218 10.111-.048 2.8983-2.0926-.45483-1.336-1.5548-1.2877-4.7806-1.6096-6.4209-.9498-4.1886-.2896-1.4742-1.1752-5.3612-.1449-.90805-1.2233-5.1773-2.6881-12.118-.8049-3.3983-2.35-10.54-.3703-1.908.2737-.53548.9013-.17257 7.2112-2.8661.821-.23064.4667.87901.9015.16453.6921-1.8484 1.9638.20806 1.8511-.16133.3701-.33708.9015.0307.5312-.9645.4828.21935-1.2394 2.3854.1449.59032 1.336-.0484.2254.63871 5.167-2.0129 1.2716-2.0226 2.3339-4.3193-1.7062-.82742-.676-.59031-.9659-.29999 3.1066-5.2822-.6117-.93709-4.0561-3.4806.4184-1.7693-.4023-.3516-.4509-1.1661 1.8028-.41613 3.1229-.52418 2.0281.22742 5.8912-.69839-.9174-5.479.1288-16.497-9.014 1.479-.064-4.4838.064-.69515-.1127-.26935 1.7867-.57257 1.175-1.7451.7887-1.8968 1.0784-1.158 1.6903-1.0048 4.2494-2.3709 2.1569-.89353 1.9155-.6387 1.6257-.15003 1.9315.12745 6.6318 2.8758 1.5775.99352 5.5211 2.5484 2.9455.76611 1.5293-.67901.8531-1.2822.5956-1.208.9496-3.2854 1.8351-4.8015 1.8672.0226-.4669-1.2193.1449-1.3597.4667-1.3548.3059-1.4984-.064-.77418-1.8027-3.5999.097-.98386.8852-1.75.7404-1.1064 1.8511-2.229 1.0142-1.5629.097-.7629.1288-3.5225.6599-2.1032.9337-1.5 3.3642 2.8822.515.65483 3.5895 3.2854 2.4629 2.158 2.5754-1.3839 3.3801-2.2193 1.7707-1.6677.145-3.4322-.2736-1.3726.048-1.6709.2897-1.6613 2.3984.15164 1.1589-.52901.9175-.9629.9658-2.6419 1.8994-1.6968 1.6418 3.3484.7082-.25967 3.4769-2.9903 2.7847 1.6758.7083-.31451.5634-3.4242 4.7161-2.3822 1.4809-.10002 3.7666-1.9919-.338-1.829 4.0723-1.2758 2.6881-.5258.7244-.5258 1.9155 7.7967-.2414.90805-1.0463.60644.7404 1.7532 1.0462 3.7548-.016.9645-.6598.40161-4.1529 1.179.081.55483.7243 1.8355.853 2.5903.1932 1.8742-.097 1.7984.3059.70644 1.4327 1.9645.3057.75482-.3057.87742.9496 1.2193.6116.43386.7405.0952 2.0121 1.4064 3.4286 1.5113 3.8309 1.358 1.7545 1.1597.7243-.16132.016-.64677-.5794-3.579.097-2.2419 4.7322-.42579 1.3682 4.2467 3.6217-1.5306 3.2194-1.6435.7403.01.5313.50161.4507 1.4193.9979 1.5887 2.2536-.59677 3.8309 2.2822.9496-.31451.3542-.92096-.1288-1.0919-.5794-2.0129.081-.81773 1.9959-2.3726.3219-.62095v-.93709l.3703-.71934.4024-1.6097.5472-.58063-1.4648-.92579-.2897-.9 1.2717-.74998.837-2.0161.6922-.38548 1.3521-.11454 2.2051-.96773 2.8975-.85806 1.1911-.12261.4828-.2629 4.5875 2.079 1.4165 1.0322-.1771 1.2452.1127.94191.6117 1.5258.4345.53869.9015.52096 1.5291.3 1.7224-.41129 1.1911-.97095.1771-.54032.1931-3.0887.161-.70967.7243-1.0016 1.1589-.33708 1.2072.45806 1.7869 1.8096 3.686-2.8113 1.7384-.99354-.048-1.5742 1.2394-.26129.1771-.83224-.7888-2.4355.4831-.45644 1.4807.25483 2.5754.0807.7405.31774 4.4748 2.2613 2.2375.0565.6438-.51289.8208-.0323 2.1409.88385.8532.0791.8852-.25322.8853.4258 3.4125 1.0935 3.1066 1.1952 1.1911.84999 1.9155.11777 1.4487-.73548-1.5131-4.9225-.2574-1.4935 2.511-.9903.9013.59998.6277.86451.6439 1.608 1.9156 1.7048 1.9636 1.5403 2.2536 1.2468.821.16935v-.62257l.4828-4.0612.7244-3.9596 2.6398-1.2597.3702-.39354 2.8652 2.6709 2.5433 2.2 2.3339 2.458 1.175 1.5242 7.1307 2.6161 1.4648.48549 2.8492 2.8032 2.4305 2.4968 2.3661 2.2887 2.2536 1.7096 1.014-.0532.5473.2629.7404 1.3129.9498.87095.8049.44677.8691 1.3322.7726 1.7322.8693.81773.2091.96934 1.835 1.329.7888 1.108.8209 1.7871 1.8994 2.2322 1.4165 1.8613 3.1066.66128 1.0784 5.5677 1.3199 5.7515.982 4.5516.161 3.7096-.4347.59516-4.3621 2.9774-4.3299 3.1758.8369 1.2274 2.2214 2.4532 1.7866 1.1339 1.8511.9403 3.0423 3.6806 5.3278 5.7467 1.6098 1.8371 1.69 1.7758 1.5132 2.1887 2.2212 1.5838 3.7667 1.6645 1.4807-.16773 1.0464-.52097 2.4466-.89675.9337-.071 1.3842.29838 2.7686.30967.4828.17743v1.1403l-.7404 2.0274.1932.64677.6277.91127.8049.7129.2737 1.3435-.3059.67097-1.1428 1.5129-1.1911.9387-.5313.67256.097 1.2645.3059.70321.7082.71935.9496.25967 1.4166-.28064 1.7383-.63386 3.7506-1.0532 2.4628-.35643 1.1428-.81452.515.27419 16.821 10.197-.064.0952-.9979 1.2758-1.6419 2.9096.3864 1.6677.7726 2.1951-.1449 1.3887-.6599 1.2435-1.2394.68225-1.336.0355-3.2032-1.9048-1.336-.39999-1.0303-.0871-.9818.21129-1.0301 1.1419-1.8674.29033-.9013.3645-.9658 1.5919.064.99836 4.7002 5.5144.016 1.3532 1.996 2.3274.4023.97741-1.1106 1.708-1.9155 1.8274-1.2072 1.5113-.081.99031.9174 1.4742.9015.11132 2.0443-.42257 1.7866.22097.5634.70483.2093.88062-.2093.93548-1.336 1.3193-1.6901.94677-1.8672-.0903-2.4949-1.0871-1.658-.60484-1.4326.12261-.692.72419-1.6098 2.9887-.1288 2.6806.4347 2.7064-.048 3.7193-.483 3.729 2.3341 4.3015 3.8149 3.9774 1.0462 1.7726-.016.92901-.3058.95161-.8048 1.6387-1.4649 1.3064-1.7866.6129-2.7365.52258-1.3843 1.2355-1.014 1.6338.1771 1.3161.5151.95159 2.2856 1.1677 4.0241 2.608.4186 1.5193-.08 2.279-.7082 2.0597-3.3642 5.5322-.4185 2.0742 1.3681 2.2871.66 1.8919.3381 2.4693-.097 1.7-.5473.84192-.016 1.8177 4.2977-.2 7.34-1.3629 7.1147-1.3613 2.9778-.23708 5.2635-.0726.3864 7.3805 6.4386-.28065.161.94838 3.4769 1.7532.3379 2.4225 1.8191 5.0886.048.88869-.6117 5.3532 1.9958 4.3596 3.5413 9.4934-.1288 2.4677-.161.86449.1932.88869.4829.38548.5313 1.379.7403 6.2193-.3219 1.0113 1.1751 1.2032.1288.54032 4.6519-.51773.4345.97095 4.8129.75321.2253.94514 4.8612-.57257.2735 1.9613 1.143 2.5871.9496.89998 1.1267.48872 1.1269 1.2129 1.0784.53548.1771.43547 1.7223.60484.5472.83708 1.2394.006.016.63225-.6921.92901.4025.46774.3057.38063.1771 1.2661.4024.59193.6921-.05.8693 3.7758-.2415.68548-1.1589.79675-.6117 1.4564.161 1.3306.5634.33548.3218.7371-.2735 1.3822.5312 1.6855.5472 1.2597-1.2716.64031-.9818.22097-.032 1.5951-.4025 1.5129.5794.42257v.80645l-.8369 2.9274-.6438.96291-.7083.2516-1.9477-.5387-.6116-.52903-1.4487-1.8871-.8371-.64032-.4184.61129-.9659.43386-.6278 1.158-.5311.41129-.3219.69353.1931.49515 1.336.63388 1.175.11293.821.64031.2093 1.0048-.2576 1.2193 1.0946.54354.3863.86451-1.3038.79192-.5634.79193 1.3199.91933.064 1.0113-.4991.61772-.3057 1.0016-1.1428.23709-.8371.52257.097.72741-.6278.0113.9979 1.2661-.676 1.029.2576 1.8903.821.0936 1.1589-.64516.8692.20322.4024-.36773 1.2394-.56773 2.3017.1339.4347-.68387.7083.99354.5472-.53548 2.4467.60484 3.0904.91289 2.6238 1.7145.6599.8 3.9115.0919 4.7485.87579.3862-1.3097.5634.11615.8532-.36773.2093-1.1726-.6278-1.1774.3541-1.979 1.3199-1.8096.6921-.0484.6278.53386 1.5131-.37742 1.2233-1.05 1.8189-.61934.821 1.8322-.4187.32581-2.5754.64837-2.3661 1.4064-1.9316-.24999-.3701 1.1935.161 1.521.3542 1.4951-1.3521 1.5919-.7405 1.9548.6117.14681.998 1.1274.081.43387-3.6055-.0807.1288 1.1322.5473 1.7839.8853.62418.032.77579 7.0987-.26129 2.9295-.85481-.1932-3.3435.676-5.8128 3.2193-2.1354.8854 1.7129-.1288 1.3726 1.5453.43065 2.0282.17096 7.5331.47097-.032 1.9661 4.169.68064 1.3037-2.6193 5.3118.88709.6117-.029 9.6579-1.6274.7565.76611 2.2214.003.8852.29032.7244.63386 2.3984-.89353 7.7746-.52419 1.6096-6.9322 6.4386.87579 7.018 1.9048-.9657 5.4515.081.97257-.2737 4.0322 1.7545.53869 3.4124.58709 1.3361 1.8935.064.76289.4989 1.1484 2.0926.0468 2.8169 2.2177-.4991.96934-.1769 2.079 1.0623.0952 5.843.16612v9.0773l.7888.0694 3.2192-1.4161.1449 3.9032 3.1068-.121-.4669 2.1806.8853 2.5596.2898 1.6984.1931 2.4919.064 2.3806.4667 1.0355-2.8006 1.6403-2.8975 3.6935-.8369 4.0838 1.8994 3.2741 5.5532 4.0741-2.4949 2.7468 2.6559 3.0516-1.3521 2.7-4.5553.13068-1.9316-.37096-2.8813.0355-5.6176-.0823-.1449 6.2402.08 1.2484 1.7544.16451 3.992.0742-.2575 6.1418 7.2272.30323-.064 1.5419 6.3098.28225-.048.90644 2.4788-.0597.032 2.3661 1.1106 2.2 1.4648-.44838.821.29515-.2093 1.9532.032 1.3613-.8371 1.2597-.3379.78386.1932.50967.7886.34676 1.0142.97256 1.175.24838 1.1106.61936.5472-.05 1.803.48063 2.2534.86612.7082-.10325.9015.25162 1.0462.64999 1.1106.37419 1.3843.21611 1.0142.56452 1.3038.16935 1.0945.60483.5473 5.7322 2.0604 5.3403 4.2011-6.0064.4991.071.7725-1.8903.5633-.10648-.097-.79675 1.4003-3.0854 1.6902-.66772.1932.38225 2.7524 1.1806 1.2072-.19354 1.2074.47903 1.368.74516 2.1248.54192 2.833 1.9161 1.5452.66611-.097.7258 1.1267 1.8258.4829.31289.2898.75644-.3864 1.8032 1.9637.57741 3.4447.7129 1.2555.19032.032-2.329 1.9477.15649.7083-2.1935 6.6155-1.7967 3.4608-2.1097-.1127-1.1435 1.7868.5258 1.175-.26612 1.835-.10648.064.7403 2.7364-.45644.1449-2.6629.064-3.2419.5956.78709.2898 1.308 1.6257.58386.3059.26774 1.8027 2.4419 1.4327.1742 1.3521.91449 1.175.34193 1.3038-.14035v.36936l1.0945.33869 1.6902-2.1564.2414-1.6806 15.565 3.0096 2.4627-1.6484 1.6741-2.8758.1288-.88063v-3.5016l.1288-4.3225 4.2657-.60482.3862.49999.8532.33225.8692-.4387 1.6096-1.3193.9498-2.4951 1.3841-.65483.1771.25645 11.316 1.1629 10.173.24355 3.9437.0452-1.3199-7.5967 2.8811-.52741-.193-4.8177-1.3038-6.2789 2.3178-.34839 3.4447.29355 2.0604-.0629-.3059-7.4241 1.9959-.40805 7.4365-1.6338 3.2354-1.4322 2.6398 5.6128.9981-.45161 2.9456 5.1806 2.0443-.95159 1.6419 2.279-.1288 1.2435 1.0462.76612 1.3038.31935 1.835.88385-.1127 1.8096 1.0624.87903.7405 1.6177-.322.44515.5311 1.558.064 1.5.4509-.0371.6921.79999 1.5291.72742.5955.5403.4829.8758.5635.49999-.5474 1.2855 1.7868.0952 1.8994 5.2677.9335 3.8209 5.1508 1.2451.9176.49516 7.0824-.30323 3.8793-.20644 7.8068-.32903 4.668.54192-.4025 4.7483-2.8168 2.4903 3.364 4.8257-4.4104 6.4725-10.624 3.929-.6761-1.5548-.1932-1.45-.5151-.87903-.6599.12423-.8049-.40321-1.1106.95966-1.336-.71612-.8532.62418.499.97257-.2575.58386.4507 1.6871-.4507 1.1306-.7887.24515-1.1106-.24677-.3703-2.0596-1.1589.35482-.8049-.12099-.8691.34355-.7244 1.0435.9496.35967.161.75643 1.1267.0129.9981.79838.4668-.45967.5472.73225-1.4807 1.6484-.8854.75161.6439 2.7145.2254.42418 10.591 2.4435 2.4789.6871.2898.36289 1.0623 9.2338.2093.41289 2.6398 2.3225.2414.46935 1.3521 8.8467-.4185.16935.4024 1.9854.998.74677.3702-.25322 1.6097 1.1048 3.1388-1.8451 7.678-6.0418 1.5614 1.6887-5.0704 6.6112-1.7385 1.8275.5151.7064.5313 1.308 1.014.4468-.66 1.0355.3863 1.2-.1288 1.0048-2.2536 1.9967-.081.3791 3.9758 1.5354.7405-.4774 2.3983-.5129 1.3038-2.8499 2.6882-.8484.6921-.039 5.006 1.4145 4.4909.3161.982 2.35.9013.8951-1.513 1.7677-3.8953 4.3628.5311 2.2952.6117 1.3064 1.7705 3.2629-2.5432 6.4354-.161.2306-3.4767 2.2613 2.9617 4.5934-6.181 4.121-4.7646 3.1047-1.497-.026-2.495 1.642 1.0947.9338.3701.5807 1.1751.6935 1.5775-.06.3057.6339-3.0261 12.235 2.9295 2.1999-.9657 1.3016 5.6659 4.1677-2.2534-.055-.4508 3.5418-5.7142-.5967-4.6841 8.0579-3.2996 5.8967-1.803-.308-1.5612-.066-.5312-.5919-2.4468-1.5952-1.6095-1.8661-.5634-1.1128-1.7706-2.0613-3.0584.879-3.2837 1.1177-.6439 1.8645 2.3824 1.0339-3.0101 4.3209-2.1085 3.9451-2.3985 5.4773-.161.1839-1.497 3.6838-3.0422-1.0564-5.2475-1.7387 3.3159 8.9902 3.0261-1.8709 1.7867 2.6612 2.7525 3.908-3.4125 2.0742-4.0241 2.3338-5.5372 3.3709-3.8309 2.2516-.097.5549-.9498 15.784-.9335 2.1.8532.4177.4184.5355 1.9477-.3339.1449-1.6338.9174.1387.5151-.5435.7726-.3113 4.9579 1.0339.7403.1016 9.3682 1.9242 1.175.1806-1.8028 5.6193-2.3019-1.4403-.7081-.8645-10.752 5.6902-3.525 1.0194-.2737.45-2.0926 1.4032.3542 1.3548-1.8028.4097 1.0945 1.5709 1.175 1.0468.4024 1.5967.6277 6.3289 1.32-.3096.2898 1.3048-1.3199.9677.5633 1.8065.6922 9.3192-.1127.4-1.0623 1.7145-2.4467 3.9805-.8692 1.2903-1.2233-2.8338-1.3844-.1725-.3862-.8339.032-2.9516-.097-.9209-7.6297-.5291-8.2093-.6225-4.346-.2968.1288 2.4193-.161.6661-4.7646 10.179-.5151.6177-2.4305 2.2936-.837.3145-2.7043 2.3112-.193.5758.2413 2.6355.7566 5.8741.097 1.8935-5.8269.029-1.6418 3.0225-3.2676 5.816-3.493 6.3274-1.2233 1.3177.5312.3823-1.6096.7354-3.8148-.9596-3.1873-.7016-4.7-1.2484-.4991.1258-4.8933.3226-.8854-.1016-.2413-.3371-7.5333.7145.7083-7.8418.08-2.0081-.1288-1.1806-2.0602-2.85 1.175-.9387-.3864-3.4499.1127-2.2516-.1771-.2468-1.3681.1356-4.008-.066-3.0905-.1371-.081 3.9064-.1288.6355-2.3983-.057-.2254.2951.161 1.321-.5473 2.1677-1.4809-.06-.2737 1.4613-1.6418 3.079-.8048.3951-.2576.7291-.5795-.2581-.7725.066-.3703-1.2145-.5956.2645-.8531.8371-.8208-.4516-.5152.6307-.064.737-1.32 1.0742-1.3199-.8887-.9497.9387.3542 1.3839-.032.8661-.4025.6629-1.3522 1.2677-.5472.8984-.1127 1.2661 1.3682 2.8129-.016.3516-.8049.7032-1.7544.8371-.8371.053-.4023-.5581-1.2073-2.6999-.6116-.8807-.3381-1.0032.4991-2.9741-1.0464-.3339-1.3682 1.8419-.354.089-2.1087-.8404-1.0784-.687-1.5293-5.1177-1.5129.092-.7727-1.4549-2.8652.1356-3.2837-7.037-.2574-3.1419-.982-2.3064-1.7867-3.9032-.1127-6.4757 1.0784-2.321 1.2557-1.7387-.7405-1.4983.6439-3.3516 1.8189-5.0935 1.6256-2.5902-.4345-1.7033-2.1087-3.1838-1.5613-1.4435-1.8188.3306-.3381-.608-1.1912-.2871-.7243.8064-1.3843.1388-3.2032-.9161-1.1428-.6613-2.9136-.6242-5.2956 1.0661-2.7847 1.0306-3.2032.2291-2.0765-.056-1.0462.3064-1.5292 1.4291-1.6096.9386-3.348-.053-1.4005.1549-1.658.7048-.853 1.3081-.032 1.6741.6922.4468.4023-.2774.5634-1.7419 2.7686 1.087-1.2555 2.4403-1.996 2.1145-.7082.9742-.6117 1.2129-.081.658.2254.821 1.1428-1.3048 1.1428-.9355.8049-.9693 3.2193-1.2629 3.2354 1.95.6116.4806 1.5453.7855 1.4166.987.4667.7549 1.5291 1.1112-1.4969 1.1629-.3864-.043-1.336 1.3887.1932.4967-.2254 1.5307.1932.7209.7244.2903 2.1569.3823.8369 1.0387 1.5454.9806.4828.6951 1.1269.9371 1.8671 2.679.8208 1.3903.7405.8 1.7706 2.75-1.5291 3.458-1.2394-.1903-.9337 1.1822-2.4305.082-2.8974-.053-2.495.4903-2.1729.3145-4.8129.8371.5795 1.558-5.328 2.0242-4.0079 5.0306-4.2978 5.2693-.4024.04-1.3682-2.4371-1.0462-1.2258-.7244-.4016-2.2374 1.4177-8.0321 4.8661-.1288 1.479.8693 1.621.5794.7854 2.0282 4.4016-3.7506 7.9047-.8208 1.6226-3.6701 7.7563 7.0502 5.4612-2.5271 7.3225-.5311.6693.097.8242.6277.6226 1.0623 1.8338 1.4648 4.379-.7887.7452 1.5775 1.2967.4829.1839-1.3844.858-1.336.4952-1.1911 3.5548-1.4004 4.1193-1.3843 3.8806 3.6218 1.2274.5794.8984 1.1911.6709-1.4326 2.1387.3703.2548-.4508 1.0194-1.3841-.4839.1127-1.0419-.8208-.7258-.5956.3258-.322 1.6903-1.0462 1.3564 1.5774 3.3919-4.2011 6.3693-8.2897 12.664-3.0101 5.8741-2.0765 4.3387.064 1.2225-.8208 1.8822-1.0464 4.9935 6.2939 1.3113-3.4286 3.4967 1.0784.2016.9497.4758.66.6452.3379 1.4064-.048 1.6484.2738 1.3048.4506 1.0629-.4989.1355-2.3019-1.0145-.8369 2.1484-1.7064-.6033-3.1226-2.7628-.7566.1.1127 1.0161-.3218.6113-.5473-.2516-1.4487.5451-.6439 1.1484.064 1.6242-.9497.4129-1.0946-.2694-.4347.9565-.097 1.4854.3219.8032.032 1.2258.6599.971.499 1.7983-1.0301.4242-.097 1.8274.3542.5694-.2093.4774-.9981.408-.4345.5484-.5956 1.7468.6761.9209-1.0784 1.5323.7403 1.2322-.1127.7.2896.4274.7888-.6903.4506.4855-.676.9645-1.1267.1629.081 1.129.5955.5548-.2576.6468-.6922.3355-.9013-.2968-.5472.8709.4345.9597-1.1428.7693-1.6741.8-.8208.8081-1.4004.5532-1.5936 1.1564-.4024.3646-.3862 1.1322-3.1873-.029-.032.6596-1.9797 1.0629-.2093.3097.08 1.5048 1.4004 3.1145-.3059.3758.1932 1.1483-.3542.3226-1.1106.3226-.499-.7177-.5311.2451-.6922-.7274.5634-.8984-.161-1.2661-.4346-.6774-.2254-1.4435-.5955-.779-2.1409 2.8338-2.2051 3.0677-2.0121 2.6322.2574 6.9806.081 1.0483-3.4123 3.5145-1.5453.1081-1.8672-.4677-6.3581-.2355-1.0785.2209-4.1689 1.3178-1.8833.7113-2.1731 1.1983 2.2697 2.4774 1.8672 1.0145-.8693 2.6629.2415 1.4693.5312.8194-2.0765 1.2241-.354.4258.7886 4.058-1.3522.5791-.9657-1.0097-.7887 1.5355-1.1911 3.4355-1.2878 3.9998-.1288.3388-3.5411-1.7419-2.6398-.081-.9176.9032.016.8226-.853.2904-1.1591.8869-1.1267.6129-.5794 1.0646-.5634.4193-.5633-.129-1.5293-.9677-2.5593.2418-2.0282.097-.515-.129-1.0945 1.1452-2.7848-1.5806-1.6258-.4677-.853.6612-3.9436-.1451-.7405.3708-4.8932 3.7905-7.7263-.5324-5.489 5.3225-3.1388-2.7258-.9175.2097-1.3844-.2902-.5794.4677-2.8168-2.7581-4.6841-4.3063-.7888.2418-.8691-.2095-.5957-.5002-1.3199.8872-.8369-.7258-.161-1.9032-5.6176 1.7902-4.5392-3.0321-3.9276-2.742-.322.4518-5.9074 7.9029-1.0945-.2257-.6117-1.0968-.6438-.258-1.3682.065-.7727.6129-.3379.7258-.6439.4355-.322.9676-.6439.4356-.5794 1.016-.097 1.0808-.4185.5645-1.3682.097v.4677l-1.1428.6128.2898 1.5162-.161.3709.5956.871-.3382 1.1129-2.6879-.5645-2.3341-.7742-3.2676.8871-4.7644-5.7902-6.4547-9.3387-3.3481 2.3225-.4347.242-1.0945.064-.6922.4032-.8048-.097-.5473.484-.6922 1.4514-1.2394.3872-.5472-.1129-.032.2581 1.0945 6.1934-.7403 1.0967-1.3199.4033-5.3441.9193 1.9316 11.435-6.1971-.484-2.5273 13.403-.3057 1.9677-.3542 3.3226-.5312.7901-2.0765 7.6935-1.0623-.048.7888-2.7581-2.318-.5322-.2413-1.5807.3379-.5806.1771-1.8548-.1127-.242-4.7805-.9838-4.3301-.8226-4.2011-.9517-5.7625-1.4999-8.6278-2.0645-.9979-.2581-.2254 1.258-1.3682-.3547-1.0301.032-2.5271-.758-.821.5161-1.5453-.8064-4.6358-.3388-3.7988-.4838-2.2373-.4838 1.3843-8.2742.2414-3.4031.4025-2.629.8852-7.2741-6.2454.2418-7.3883.3227-.097-3.2742-2.4307 1.3387-.7083.081-1.1911 7.0967-.5472-.2098-.9335 1.5807-.5313.081-.9174-.4195-.3221 1.1613-1.851-.2096-1.5131 2.3709 1.8029 1.4516 1.1911 1.2903.6439.5-.5473 1.0967 1.1589 1.5-.032 2.4032-.3542.7903-.9174.6129-.4346.9678.2253.3225-.821 1.6291-.5794.8386-.9657-.9193-1.3038-.4999-1.159-1.3548-.8531-1.5646-1.497-1.2903-.5312-1.0161-.3701-1.6936.1127-1.0806-.3865-.8226-.8852-1.1612-.032-.7904.6761-.7096.064-.4677-.5151-1.6935.4668-.871.2254-1.3064-.4667-.8388-1.1107-1.3548-.4991-1.8871-1.3521-.4677-.3057-.4999-.9337-.2259-1.7706-.129-1.9315-.2419-5.1348-1.887-.4829-.5807-1.7705-.7096-1.6902 2.274-1.0946.097-.7082-.2581-.7727.4679-.8209 5.2418-1.1267-.2419-4.2011.1129-1.0303-.048-4.3621 2.7742-1.2877.774-.4829.097-1.7707-2.2095-1.6418-.097.2254 1.1128-.1449.6936-.9336 2.2581 1.7224 2.7095 1.3199 2.3226.4507 1.6774.032 1.3548.064 8.0322-.3059 3.1612-.2092 1-.4508.6935-1.3521.3388-3.2837.5967-1.0462-.1452-.048 1.9516-.7083 1.1613-2.2051 4.2903-4.4587 3.516 1.2072 1.5001-.1932.7742-3.7826 3.016 1.0784 1.5-1.175.3225-1.7223.6774-2.6881.8227 1.014 1.8386.6599.7904.5795 2.129-.6117.9999-6.696-.9839-9.7544 3.9032m161.24-488.48 1.8028 1.679.064.4549-.4024 2.4161.5473.3354v1.2758l1.0302.3291 2.7685.6064.2737-.3919.4668-1.7274.7243-.4919 2.8331.3564-.2898.6597.5955.2742.1771.9838-.5311 1.1935 1.1106.4968.5794 4.8548.821.055.1127.6339-.8049.5226-.1771.7177.1932.6532 1.2233.061 1.4327-.2774-.081-.7258 1.7061.1178.4186.6919 1.1912.5016-.6922.3935.2252.5549-1.8349.9871-.081.4483 2.0603 2.0274 3.4286-1.7693 1.9799 2.1484 2.2695.6548 2.2375.9451-.2254.5113.032 1.3871-.2091 1.5032-.1127 2.7516 1.4324.7774-.9818 1.4951-.016.3855-1.5131 2.1129 1.497.2048 3.4769-.3371.3863 3.5129-1.3039 2.7902 2.8009 2.4936.1127-.25-.032-2.8194h2.6237l.032 3.1887 1.0945 1.6274.4507 1.3645.081 1.2258 1.3038-.09.6599 1.2903.2738.2096 1.5612 3.1597.5795 1.7403.4025 2.5661.2896.7532.499 2.8564.1449 3.7709-.1449.9274.1771 1.4951.4667.2904 1.4327-.5258 6.2133-2.4323 5.3117-1.9919.3381-.2032-1.8028-3.9064 2.2534-.8354.1611-.8323-.5151-.6871-1.2394-.9338-1.4809-1.4758-.3059-1.821-1.1751-1.6257-.7726-.8113.064-1.4565.2093-1.0112-2.0765-.7307-.515-.7209-.081-1.6436-.8693-1.4919-.5473-.3435-.3218-1.5129.193-.8193h3.493l2.0282.1806 1.2233-.1048 3.1227.1242.7566 2.6161.8692 1.6951.7886.6016-.048-1.8838 1.5613-.5758 1.9316-.2645.4989-.5419.097-.7839-1.6256-1.7677-1.5776-.992-1.3682-1.3677.032-.2209-1.4968-1.3065-2.1248-6.1515-1.497-3.4435-1.32-1.8822-.9174-2.9822-.4669-1.0662-1.4163-2.4386-.4508-1.0661-1.7706-3.5242.7082-.6145.7405-.04 1.4808-.4032 1.1107.1693.1449 1.2581.6119.3128.032.7162.9657.9548.5794.9193 1.2555-.2613-1.0945-.5096-.4025-.729.7405-1.4113.1932-3.3742.1932-1.1032-.2093-.3564.2254-.8839-.5956-.7548 1.7384-.4258 2.2053-.3226 2.7362-1.5145 1.6903-.2887.5472-1.1613.6922-.1693 1.1428.7355-1.3843.8322-.9657 2.7693.3057.4871 1.1106-.7371.5152 1.3048-.5472.9791 1.0462.8112 1.2555-.094.9015.2161 2.7846 1.4758.064.708 3.7987-2.0741.064-.4839.6278-.8242-.1611-.7516-.8047-1.7032-.676-.6419.2413-.7113-.5633-.8112.8531-.4839 1.4488-.321-.064-.7161-.9337-1.1.1932-.7629-.1127-1.4887.7244-1.0967.837-.6339.8208.2274 1.4487 1.0129.8532 1.3097-.1449.7064 3.6216 1.1597 2.318-1.3242.6922-.1565 2.0121.1758.7886-2.2564.7887-.2919 2.6881-.5226.8371-1.2016-1.0142-1.2338-.2413-.5533-.1449-1.8354.2254-.33069 3.7826-1.1952 1.8672 1.6435 1.2555.3726 2.8653.4758 1.4807-1.0226.7727-1.5177.2093-1.0887 1.0623-1.4097-1.3682-1.7419-1.996-.35159-.8852-.6387-.4669.42579-2.8812-2.4871-.5311-.83063 1.3682-1.3516-.322-.31451.7565-.78063-.1127-1.158-1.8188-1.6774-5.0221-3.5548.1127-1.8919-3.8309-1.7032-.8047-.45806-4.3623-4.0741 1.5614-.37257 1.5935-.58548.081-.36612-1.1106-1.0742.7404-.90806-.4667-.47579.5633-.58708-.5472-.39355-2.6237.49031-.1288-.13874 2.2695-2.2838-.9496-1.2451.4184-1.2613.161-1.3274 1.3521.33869 1.5935-.24676-.9174-1.9742-.5151-.83063-.6599.84354-.6761.24999-.7082-1.7758-.7727.35646-.4506-.31937-.4992-1.1468-.2896-1.4016 1.0462-1.2661.9659-.42418.9818-.1097-.3219-.89032 1.4004-.98707 2.0281-.89678-.3863-.96289.1288-.42418-1.6258-1.4613-.66-1.2145 2.157-.4145 2.7525-1.1435.8691-.58064 2.2375-1.1968 2.157-.69839 1.0945-.45965 1.9316-.57259 1.5614-1.0677 2.3983-.62579.3219-.19839 1.3038-.70966-.5151-.68871-1.0301-7.8838-.9497-.19354.1449-1.8806.354-.44838-.9657-.91773-4.0241-1.7613-1.2716-1.3161-.4346-.17582-.499-1.3613-.8209-.49837-.66.36934-3.1871.76934-1.2233-3.4564-2.9296.30806-.5956-.0936-5.1025-1.9129-2.8975-1.079-1.2394-.11938-.2413.37258.6921 1.35.4185.32742-2.9617 4.287.6117 5.2048.4184 3.1564-4.0563.43547-.2414-2.4193-.2415-.53871-4.1529 2.4468-2.3823.84354-.2896-.14036-1.3682.64354-.8371 1.1484-.4345 2.058-.9337 1.4-.5151 1.1097-.4667 1.9242-5.6983-.28548-4.3621-.31935-11.734-.79032-.064-.45643-2.2856-.21774-1.7062-.0468-.483 1.108-.2575 1.1177.1127.66289 2.8973 3.1161.8371 1.658-.2254 2.1548-1.996-.35321-.4668-1.3274-.7404-.9516-1.014.13552-.7727-.23388-1.8028.003-.1127-.40807.5151-.68708.3701-.94675.032-.9258-.2574-1.1919-.5634-.94837-2.4467-2.4403-1.1106-.21775-.7727-.58709-2.6558-1.308-1.996-.85804-.9336-.55645-1.5614-1.621-.7564-1.7742-.2415-1.3968-.1611-2.6387-1.5773-.89353-.6922-.21452-.9175-1.2371-4.5231.23386-.4346-5.3048-.3381.19355-3.7826-.74998-4.6358-.0532-13.94-.22097-1.6579-.0145-.097 5.3935-8.2093-.14197-.2735.12907-8.2575 1.2968 5.2312 2.4935-.4506.6774 1.6097 1.5274 1.7545.24032.9175.58709-.1449.35484-1.9959-.19839-.7083.43225.4829 1.8548-.9335.79355-.821-.21452.1288 1.5129-4.1047-3.6677-.9175.13713-1.6418.61611-.837-.46935-.177 1.1661 1.4486 1.5339-.338.20321.7566 1.5355-.5151 4.2499-2.5756.34193-.6438 1.4871.161.75643-.8852.89999-.2737-.0436-.9176 1.0468-.8208.4387-1.8189.30645-.2576.40806-1.3521.94353-.9015 1.25-1.0945 2.0564.4507.15649.7405 1.3032 1.4487 1.3822.2737.55805-.097 1.3871-1.3038 1.9032.2735.52741-.8691 1.5209-1.336.90805-1.3199-.029-.4507 1.6242-.032 1.6097-.3542.64999-.097 1.329 1.7224.77741.499.99999-.2093.55805-1.0462.94355-.9176 1.4984-.3379.27417-1.8189 2.8193-.5313 2.0838.2093.64838 1.5292 2.558.016 1.2419-.8049.39032-.2576 1.5822-.5311.3403-.7083.96935-.2735.86128-.032 1.0677 2.2695 1.5096 1.4648-1.1355.7727-1.021.5633-1.0806 1.5613-.0855 2.1087 2.05 1.5453-1.5032-.064-.74837 1.4487-3.3048.4024-1.3226-.1127-1.8338 2.1569.54516 6.6479 1.4758 1.835.0145 1.9799-.6903 2.6879-.54839 2.479-.39355-.016-.90159.7083-.24516-.048 1.6709 1.7866.0904.4024 3.5983.2415 1.3855 1.9799 4.0838.8691 1.2596 5.6177 5.5257.5312.40484 5.8269 3.1096.7727.43386.1769.49676.821.13391-.2897.75327 1.0462.9548.7566-.1307 3.4767 4.0967-3.0743 4.2048"></path>
            </g>
            {/* ./MAP REGIONS */}
            {/* NAME REGIONS */}
            <KyivGName color={regionKyivG ? '#fff' : '#0084ff'} />
            {regionObukhovsky && <ObukhovskyName />}
            {regionVyshgorodsky && <VyshgorodskyName />}
            {regionBuchanskiy && <BuchanskiyName />}
            {regionFastovsky && <FastovskyName />}
            {regionBelotserkovsky && <BelotserkovskyName />}
            {regionBoryspilsky && <BoryspilskyName />}
            {regionBrovarsky && <BrovarskyName />}
            {/* ./NAME REGIONS

            {/* NAME GLOBAL REGIONS */}
            <g
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth="1.6113"
                transform="scale(.999 1.001)"
                fill={regionKyiv ? '#fff' : BLUE}
                fillOpacity=".93726"
                opacity=".85"
                aria-label="Київська">
                <path d="m2276.6 1133.4h-10.001l-12.296-24.297v24.297h-8.8531v-47.938h8.8531v23.215l12.493-23.215h9.5417l-13.149 23.084z" />
                <path d="m2288.4 1096.9v16.919q0 3.1478-.7869 10.46l11.87-27.379h10.689v36.527h-8.1318v-17.182q0-3.8691.7541-10.427l-11.902 27.609h-10.591v-36.527z" />
                <path d="m2326.4 1133.4h-8.722v-36.527h8.722zm-15.083-46.004q0-2.0001 1.1476-3.115 1.1477-1.1148 3.1806-1.1148t3.1806 1.1804q1.1804 1.1476 1.1804 3.0494 0 1.869-1.1804 3.0166-1.1477 1.1477-3.1806 1.1477t-3.1806-1.0821q-1.1476-1.1148-1.1476-3.0822zm13.05 0q0-1.9673 1.1476-3.0822 1.1476-1.1476 3.2134-1.1476 2.0001 0 3.1805 1.1148 1.1805 1.1149 1.1805 3.115 0 1.9346-1.1805 3.0494-1.1476 1.1149-3.1805 1.1149-2.033 0-3.2134-1.1149-1.1476-1.1476-1.1476-3.0494z" />
                <path d="m2359.9 1106.4q0 3.0822-1.8362 5.1479-1.8034 2.033-5.2791 2.6232v.2623q3.8364.4918 6.0005 2.6559 2.1969 2.1313 2.1969 5.5414 0 5.2464-3.7052 8.0335t-10.591 2.7871h-12.821v-36.527h12.755q13.28 0 13.28 9.4761zm-7.9678 15.706q0-2.328-1.5083-3.3445t-4.5578-1.0165h-3.2789v9.1811h3.4101q5.9349 0 5.9349-4.8201zm-.9509-14.919q0-3.6068-4.7873-3.6068h-3.6068v7.7055h2.6232q2.8854 0 4.3282-.9181 1.4427-.9509 1.4427-3.1806z" />
                <path d="m2378.4 1134.1q-6.5251 0-9.9352-4.7544-3.4101-4.7545-3.4101-13.968 0-9.6401 3.2134-14.395 3.2461-4.7544 10.001-4.7544 2.0329 0 4.2626.5902t4.0003 1.705l-2.492 6.7874q-2.7215-1.6066-4.8201-1.6066-2.7871 0-4.033 2.9182-1.2133 2.8855-1.2133 8.6892 0 5.6726 1.2133 8.4925 1.2132 2.7871 3.9675 2.7871 3.2789 0 6.853-2.2953v7.6727q-3.4429 2.1313-7.6072 2.1313z" />
                <path d="m2400 1111.2h3.0822q7.3121 0 10.755 2.656 3.4757 2.6559 3.4757 8.0334 0 11.542-14.493 11.542h-11.542v-36.527h8.7219zm8.3286 10.886q0-2.328-1.41-3.3445-1.3771-1.0165-4.4266-1.0165h-2.492v9.1811h2.6232q2.7215 0 4.197-1.0821 1.5084-1.1148 1.5084-3.738z" />
                <path d="m2441.1 1096.9h9.181l-10.001 17.313 10.624 19.215h-9.6073l-9.5417-18.788v18.788h-8.722v-36.527h8.722v17.444z" />
                <path d="m2472.5 1133.4-1.7378-4.984h-.1968q-1.9345 3.2133-4.0003 4.4265-2.0657 1.2132-5.2135 1.2132-4.0331 0-6.3611-3.0166-2.2953-3.0166-2.2953-8.3941 0-5.7709 3.1478-8.558 3.1806-2.8199 9.4761-3.115l4.8529-.1967v-2.6232q0-5.1151-4.4266-5.1151-3.2789 0-7.5416 2.5575l-3.0166-6.0332q5.4431-3.4429 11.837-3.4429 5.8037 0 8.8203 3.3445 3.0494 3.3117 3.0494 9.4106v24.526zm-7.5743-6.1645q2.3936 0 3.8035-2.1313 1.4428-2.1641 1.4428-5.7381v-3.0822l-2.6888.1311q-2.9838.164-4.3937 1.7051-1.3772 1.5411-1.3772 4.5905 0 4.5249 3.2134 4.5249z" />
            </g>
            {/* ./NAME GLOBAL REGIONS */}
            <Mines x={2250} y={1170} text={day.covered_territory} />
        </>
    );
};
