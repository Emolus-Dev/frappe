export default {
	actions: [],
	allow_rename: 1,
	autoname: "field:title",
	creation: "2023-07-19 20:24:03.882049",
	doctype: "DocType",
	editable_grid: 1,
	engine: "InnoDB",
	field_order: ["title", "doctype_a_with_child_table_with_link_to_doctype_b"],
	fields: [
		{
			fieldname: "title",
			fieldtype: "Data",
			label: "Title",
			reqd: 1,
			unique: 1,
		},
	],
	index_web_pages_for_search: 1,
	istable: 1,
	links: [],
	modified: "2023-07-19 20:38:30.728746",
	modified_by: "Administrator",
	module: "Custom",
	name: "Child Table With Link To Doctype A",
	naming_rule: "By fieldname",
	owner: "Administrator",
	permissions: [],
	sort_field: "modified",
	sort_order: "DESC",
	states: [],
};
