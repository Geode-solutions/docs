<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class GeosExporterImpl


# class GeosExporterImpl


## Records

RegionDefinitions



## Functions

### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(const GeosExporterImpl<Model> & )
```


### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(GeosExporterImpl<Model> && )
```


### create_region_definitions

```cpp
protected RegionDefinitions create_region_definitions(const Model & model)
```

### operator=

```cpp
public GeosExporterImpl<Model> & operator=(const GeosExporterImpl<Model> & )
```


### operator=

```cpp
public GeosExporterImpl<Model> & operator=(GeosExporterImpl<Model> && )
```


### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>()
```


### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(std::string_view files_directory, const Model & model)
```


### ~GeosExporterImpl

```cpp
public void ~GeosExporterImpl<Model>()
```


### prepare_export

```cpp
public void prepare_export()
```


### write_files

```cpp
public void write_files()
```


### add_well_perforations

```cpp
public void add_well_perforations(const PointSet3D & perforations, std::string_view name)
```


### set_physical_problem

```cpp
public void set_physical_problem(const PhysicalProblem & problem)
```


 Writes a full simulation deck instead of the mesh and boundary conditions only. The problem must outlive the export.

### files_directory

```cpp
protected std::string_view files_directory()
```


### prefix

```cpp
protected std::string_view prefix()
```


### convert_model

```cpp
protected void convert_model()
```


### initialize_solid_region_attribute

```cpp
protected index_t initialize_solid_region_attribute()
```


### add_block_collection_regions

```cpp
protected void add_block_collection_regions()
```


### initialize_surface_cells

```cpp
protected void initialize_surface_cells(index_t first_surface_region_id)
```


### write_well_perforations_boxes

```cpp
protected void write_well_perforations_boxes(pugi::xml_node & root)
```


### write_mesh_files

```cpp
protected void write_mesh_files(pugi::xml_node & root)
```


### write_boundary_conditions

```cpp
protected void write_boundary_conditions(pugi::xml_node & root)
```


### write_boundary_functions

```cpp
protected void write_boundary_functions(pugi::xml_node & root)
```


### check_property_name

```cpp
protected bool check_property_name(std::string_view property_name)
```


### transfer_physical_properties

```cpp
protected void transfer_physical_properties()
```


### transfer_boundary_conditions

```cpp
protected void transfer_boundary_conditions()
```


### transfer_boundary_condition

```cpp
protected void transfer_boundary_condition(const uuid & attribute_id, std::string_view field_name, std::string_view name_prefix, std::optional<local_index_t> component)
```


### delete_mapping_attributes

```cpp
protected void delete_mapping_attributes()
```

### write_solid_file

```cpp
protected std::string write_solid_file()
```


### duplicate_imported_fields

```cpp
protected void duplicate_imported_fields(AttributeManager & cell_attributes)
```


### validate_problem

```cpp
protected void validate_problem()
```


### prepare_simulation

```cpp
protected void prepare_simulation()
```


### add_isothermal_boundary_temperature

```cpp
protected void add_isothermal_boundary_temperature(double temperature)
```


### build_deck_context

```cpp
protected GeosDeckContext build_deck_context()
```


### write_simulation_sections

```cpp
protected void write_simulation_sections(pugi::xml_node & problem_node)
```


### write_well_perforation_file

```cpp
protected void write_well_perforation_file()
```


### write_boundary_table_files

```cpp
protected void write_boundary_table_files()
```




# class GeosExporterImpl


