const { useAdminComponent, useComponent } = require("../../../../lib/componee");
const { buildAdminUrl } = require("../../../../lib/routie");

exports = module.exports = {
    "*": [
        {
            id: "sale.group",
            areaId: 'admin.menu',
            "source": useAdminComponent("cms/components/admin/NavigationItemGroup.js"),
            props: { id: 'sale.group', name: 'Sale' },
            "sortOrder": 20
        },
        {
            id: "orders",
            areaId: 'sale.group',
            source: useAdminComponent("cms/components/admin/NavigationItem.js"),
            props: {
                "icon": "CubeIcon",
                "url": buildAdminUrl("orderGrid"),
                "title": "Orders"
            },
            sortOrder: 5
        }
    ],
    "orderEdit": [
        {
            id: "metaTitle",
            areaId: 'content',
            source: useComponent("Title.js"),
            props: {
                title: "Edit order"
            },
            sortOrder: 1
        },
        {
            id: "pageHeading",
            areaId: "content",
            source: useAdminComponent("cms/components/admin/PageHeading.js"),
            props: {
                backUrl: buildAdminUrl('orderGrid')
            },
            sortOrder: 10
        },
        {
            id: "paymentStatus",
            areaId: "pageHeadingLeft",
            source: useAdminComponent("sale/components/admin/order/edit/PaymentStatus.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "shipmentStatus",
            areaId: "pageHeadingLeft",
            source: useAdminComponent("sale/components/admin/order/edit/ShipmentStatus.js"),
            props: {},
            sortOrder: 20
        },
        {
            id: "orderEditLayout",
            areaId: 'content',
            source: useAdminComponent("sale/components/admin/order/edit/Layout.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "customerNotes",
            areaId: 'rightSide',
            source: useAdminComponent("sale/components/admin/order/edit/CustomerNotes.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "customer",
            areaId: 'rightSide',
            source: useAdminComponent("sale/components/admin/order/edit/Customer.js"),
            props: {},
            sortOrder: 15
        },
        {
            id: "items",
            areaId: 'leftSide',
            source: useAdminComponent("sale/components/admin/order/edit/Items.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "payment",
            areaId: 'leftSide',
            source: useAdminComponent("sale/components/admin/order/edit/Payment.js"),
            props: {},
            sortOrder: 20
        },
        {
            id: "activities",
            areaId: 'leftSide',
            source: useAdminComponent("sale/components/admin/order/edit/Activities.js"),
            props: {},
            sortOrder: 30
        }
    ],
    "orderGrid": [
        {
            id: "orderGrid",
            areaId: 'content',
            source: useAdminComponent("sale/components/admin/order/grid/Grid.js"),
            props: {
                limit: 20
            },
            sortOrder: 20
        },
        {
            id: "pageHeading",
            areaId: "content",
            source: useAdminComponent("cms/components/admin/PageHeading.js"),
            props: {
            },
            sortOrder: 10
        },
        {
            id: 'title',
            areaId: 'head',
            source: useComponent("Title.js"),
            props: {
                title: "Orders"
            },
            sortOrder: 1
        },
        {
            id: 'orderNumberColumn',
            areaId: 'orderGridHeader',
            source: useComponent("grid/headers/Basic.js"),
            props: {
                title: "ID",
                id: "order_number"
            },
            sortOrder: 1
        },
        {
            id: 'orderNumberRow',
            areaId: 'orderGridRow',
            source: useAdminComponent("sale/components/admin/order/grid/OrderNumberRow.js"),
            props: {
                id: "order_number",
                editUrl: "editUrl"
            },
            sortOrder: 1
        },
        {
            id: 'dateColumn',
            areaId: 'orderGridHeader',
            source: useAdminComponent("sale/components/admin/order/grid/OrderDateColumnHeader.js"),
            props: {
                title: "Date",
                id: "created_at"
            },
            sortOrder: 5
        },
        {
            id: 'dateRow',
            areaId: 'orderGridRow',
            source: useComponent("grid/rows/Date.js"),
            props: {
                id: "created_at"
            },
            sortOrder: 5
        },
        {
            id: 'nameColumn',
            areaId: 'orderGridHeader',
            source: useComponent("grid/headers/Basic.js"),
            props: {
                title: "Customer",
                id: "customer_name"
            },
            sortOrder: 10
        },
        {
            id: 'nameRow',
            areaId: 'orderGridRow',
            source: useComponent("grid/rows/Basic.js"),
            props: {
                id: "customer_name"
            },
            sortOrder: 10
        },
        {
            id: 'shipmentStatusColumn',
            areaId: 'orderGridHeader',
            source: useAdminComponent("sale/components/admin/order/grid/ShipmentStatusColumnHeader.js"),
            props: {
                title: "Shipment status",
                id: "shipment_status"
            },
            sortOrder: 25
        },
        {
            id: 'shipmentStatusRow',
            areaId: 'orderGridRow',
            source: useAdminComponent("sale/components/admin/order/grid/ShipmentStatus.js"),
            props: {
                id: "shipment_status"
            },
            sortOrder: 25
        },
        {
            id: 'paymentStatusColumn',
            areaId: 'orderGridHeader',
            source: useAdminComponent("sale/components/admin/order/grid/PaymentStatusColumnHeader.js"),
            props: {
                title: "Payment status",
                id: "payment_status"
            },
            sortOrder: 30
        },
        {
            id: 'paymentStatusRow',
            areaId: 'orderGridRow',
            source: useAdminComponent("sale/components/admin/order/grid/PaymentStatus.js"),
            props: {
                id: "payment_status"
            },
            sortOrder: 30
        },
        {
            id: 'totalColumn',
            areaId: 'orderGridHeader',
            source: useComponent("grid/headers/FromTo.js"),
            props: {
                title: "Total",
                id: "grand_total"
            },
            sortOrder: 50
        },
        {
            id: 'totalRow',
            areaId: 'orderGridRow',
            source: useComponent("grid/rows/PriceRow.js"),
            props: {
                id: "grand_total"
            },
            sortOrder: 50
        }
    ],
    "dashboard": [
        {
            id: "statistic",
            areaId: 'leftSide',
            source: useAdminComponent("sale/components/admin/dashboard/Statistic.js"),
            props: { api: buildAdminUrl("salestatistic", { "period": "daily" }) },
            sortOrder: 10
        },
        {
            id: "lifetimesales",
            areaId: 'rightSide',
            source: useAdminComponent("sale/components/admin/dashboard/Lifetimesales.js"),
            props: {},
            sortOrder: 10
        },
        {
            id: "bestsellers",
            areaId: 'leftSide',
            source: useAdminComponent("sale/components/admin/dashboard/Bestsellers.js"),
            props: {
                listUrl: buildAdminUrl('productGrid')
            },
            sortOrder: 20
        }
    ]
}