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

# class GeographicCoordinateSystem

# class GeographicCoordinateSystem


```cpp
Inherits from AttributeCoordinateReferenceSystem<dimension>
```



## Records

Info



## Functions

### GeographicCoordinateSystem

```cpp
public void GeographicCoordinateSystem<dimension>(AttributeManager & manager, Info info)
```


### ~GeographicCoordinateSystem

```cpp
public void ~GeographicCoordinateSystem<dimension>()
```


### create_from_attribute

```cpp
public GeographicCoordinateSystem create_from_attribute(const AttributeCoordinateReferenceSystem<dimension> & crs, AttributeManager & manager, Info info)
```

### type_name_static

```cpp
public NamedType type_name_static()
```


### type_name

```cpp
public NamedType type_name()
```


### info

```cpp
public const Info & info()
```


### geographic_coordinate_systems

```cpp
public absl::FixedArray<Info> geographic_coordinate_systems()
```

### import_coordinates

```cpp
public void import_coordinates(const GeographicCoordinateSystem<dimension> & crs)
```


### geographic_coordinate_systems

```cpp
public int geographic_coordinate_systems()
```




# class GeographicCoordinateSystem

