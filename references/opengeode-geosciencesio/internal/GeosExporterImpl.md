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


## Functions

### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(GeosExporterImpl<Model> && )
```


### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(const GeosExporterImpl<Model> & )
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


### ~GeosExporterImpl

```cpp
public void ~GeosExporterImpl<Model>()
```


### GeosExporterImpl

```cpp
public void GeosExporterImpl<Model>(std::string_view files_directory, const Model & model)
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
public void add_well_perforations(const PointSet3D & perforations)
```


### add_cell_property1d

```cpp
public void add_cell_property1d(std::string_view property_name)
```


### add_cell_property2d

```cpp
public void add_cell_property2d(std::string_view property_name)
```


### add_cell_property3d

```cpp
public void add_cell_property3d(std::string_view property_name)
```


### files_directory

```cpp
protected std::string_view files_directory()
```


### prefix

```cpp
protected std::string_view prefix()
```


### initialize_solid_region_attribute

```cpp
protected index_t initialize_solid_region_attribute()
```


### create_region_attribute_map

```cpp
protected absl::flat_hash_map<uuid, index_t> create_region_attribute_map(const Model & model)
```

### write_well_perforations_boxes

```cpp
protected void write_well_perforations_boxes(pugi::xml_node & root)
```


### write_mesh_files

```cpp
protected void write_mesh_files(pugi::xml_node & root)
```


### check_property_name

```cpp
protected bool check_property_name(std::string_view property_name)
```


### transfer_cell_properties

```cpp
protected void transfer_cell_properties()
```


### delete_mapping_attributes

```cpp
protected void delete_mapping_attributes()
```

### write_solid_file

```cpp
protected std::string write_solid_file()
```


### write_well_perforation_file

```cpp
protected void write_well_perforation_file()
```




# class GeosExporterImpl


