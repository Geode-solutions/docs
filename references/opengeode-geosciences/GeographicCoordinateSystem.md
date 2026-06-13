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


```cpp
Inherits from AttributeCoordinateReferenceSystem<dimension>
```



## Functions

### type_name_static

```cpp
public static CRSType type_name_static()
```


### GeographicCoordinateSystem

```cpp
public void GeographicCoordinateSystem<dimension>(AttributeManager & manager, GeographicCoordinateSystemInfo info)
```


### ~GeographicCoordinateSystem

```cpp
public void ~GeographicCoordinateSystem<dimension>()
```


### create_from_attribute

```cpp
public static GeographicCoordinateSystem<dimension> create_from_attribute(const AttributeCoordinateReferenceSystem<dimension> & crs, AttributeManager & manager, GeographicCoordinateSystemInfo info)
```

### type_name

```cpp
public CRSType type_name()
```


### info

```cpp
public const GeographicCoordinateSystemInfo & info()
```


### geographic_coordinate_systems

```cpp
public static absl::FixedArray<GeographicCoordinateSystemInfo> geographic_coordinate_systems()
```


### import_coordinates

```cpp
public void import_coordinates(const GeographicCoordinateSystem<dimension> & crs)
```




# class GeographicCoordinateSystem


```cpp
Inherits from AttributeCoordinateReferenceSystem<3U>
```



# class GeographicCoordinateSystem


```cpp
Inherits from AttributeCoordinateReferenceSystem<2U>
```



