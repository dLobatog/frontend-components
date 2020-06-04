/* eslint-disable camelcase */
import { StyleSheet, Font } from '@react-pdf/renderer';
import c_table_m_compact_cell_PaddingTop from '@patternfly/react-tokens/dist/js/c_table_m_compact_cell_PaddingTop';
import c_table_m_compact_cell_PaddingBottom from '@patternfly/react-tokens/dist/js/c_table_m_compact_cell_PaddingBottom';
import c_table_m_compact_cell_PaddingLeft from '@patternfly/react-tokens/dist/js/c_table_m_compact_cell_PaddingLeft';
import chart_global_Fill_Color_700 from '@patternfly/react-tokens/dist/js/chart_global_Fill_Color_700';
import chart_global_warning_Color_200 from '@patternfly/react-tokens/dist/js/chart_global_warning_Color_200';
import chart_global_warning_Color_100 from '@patternfly/react-tokens/dist/js/chart_global_warning_Color_100';
import global_Color_light_300 from '@patternfly/react-tokens/dist/js/global_Color_light_300';
import global_Color_dark_200 from '@patternfly/react-tokens/dist/js/global_Color_dark_200';
import global_Color_dark_100 from '@patternfly/react-tokens/dist/js/global_Color_dark_100';
import chart_color_red_100 from '@patternfly/react-tokens/dist/js/chart_color_red_100';
import { fontTypes, generateFonts, redhatFont } from './fonts';

Font.register({ family: 'Overpass', fonts: generateFonts(fontTypes) });

const { RedHatDisplay, RedHatText } = redhatFont();

Font.register({ family: 'RedHatDisplay', fonts: Object.values(RedHatDisplay) });
Font.register({ family: 'RedHatText', fonts: Object.values(RedHatText) });

export default (style = {}) => StyleSheet.create({
    ...style,
    page: {
        fontWeight: 500,
        fontFamily: 'RedHatText',
        height: '100%',
        padding: '20 50',
        lineHeight: 1.5
    },
    displayFont: {
        fontFamily: 'RedHatDisplay'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    currDate: {
        alignSelf: 'flex-end',
        marginLeft: 'auto',
        fontSize: 9,
        fontStyle: 'italic',
        color: '#6e6b6c'
    },
    reportName: {
        fontSize: 28,
        color: chart_color_red_100.value
    },
    largeSpacing: {
        margin: '30 0'
    },
    mediumSpacing: {
        margin: '15 0'
    },
    smallSpacing: {
        margin: '7 0'
    },
    text: {
        fontSize: 9,
        color: global_Color_dark_100.value
    },
    firstTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: chart_color_red_100.value
    },
    secondTitle: {
        fontWeight: 700,
        fontSize: 9,
        color: chart_global_Fill_Color_700.value
    },
    thirdTitle: {
        fontSize: 9,
        color: global_Color_dark_200.value
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    colorCrit: {
        color: chart_color_red_100.value
    },
    colorHigh: {
        color: chart_global_warning_Color_100.value
    },
    colorMedium: {
        color: chart_global_warning_Color_200.value
    },
    defaultColor: {
        color: global_Color_light_300.value
    },
    compactCellPadding: {
        paddingLeft: c_table_m_compact_cell_PaddingLeft.value,
        paddingBottom: c_table_m_compact_cell_PaddingBottom.value,
        paddingTop: c_table_m_compact_cell_PaddingTop.value
    }
});
