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

# class StructuralModelGeosExporter


## Functions

### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(const StructuralModelGeosExporter & )
```


### operator=

```cpp
public StructuralModelGeosExporter & operator=(const StructuralModelGeosExporter & )
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(StructuralModelGeosExporter && )
```


### operator=

```cpp
public StructuralModelGeosExporter & operator=(StructuralModelGeosExporter && )
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter()
```


### StructuralModelGeosExporter

```cpp
public void StructuralModelGeosExporter(const StructuralModel & model, basic_string_view files_directory)
```


### ~StructuralModelGeosExporter

```cpp
public void ~StructuralModelGeosExporter()
```


### add_well_perforations

```cpp
public void add_well_perforations(const PointSet3D & well_perforations)
```


### add_cell_property_1d

```cpp
public void add_cell_property_1d(basic_string_view name)
```


### add_cell_property_2d

```cpp
public void add_cell_property_2d(basic_string_view name)
```


### add_cell_property_3d

```cpp
public void add_cell_property_3d(basic_string_view name)
```


### run

```cpp
public void run()
```




