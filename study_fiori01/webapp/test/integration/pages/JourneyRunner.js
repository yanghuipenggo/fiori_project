sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/zyh/z/studyfiori01/test/integration/pages/TravelList",
	"com/zyh/z/studyfiori01/test/integration/pages/TravelObjectPage",
	"com/zyh/z/studyfiori01/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/zyh/z/studyfiori01') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

