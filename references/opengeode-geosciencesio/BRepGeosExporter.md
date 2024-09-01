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

# class BRepGeosExporter


## Functions

### BRepGeosExporter

```cpp
public void BRepGeosExporter(const BRepGeosExporter & )
```


### operator=

```cpp
public BRepGeosExporter & operator=(const BRepGeosExporter & )
```


### BRepGeosExporter

```cpp
public void BRepGeosExporter(BRepGeosExporter && )
```


### operator=

```cpp
public BRepGeosExporter & operator=(BRepGeosExporter && )
```


### BRepGeosExporter

```cpp
public void BRepGeosExporter()
```


### BRepGeosExporter

```cpp
public void BRepGeosExporter(const BRep & brep, basic_string_view files_directory)
```


### ~BRepGeosExporter

```cpp
public void ~BRepGeosExporter()
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




