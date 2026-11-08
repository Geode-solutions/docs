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

# class GeographicGridCoordinateSystem


```cpp
Inherits from GridCoordinateReferenceSystem<3U>
```



# class GeographicGridCoordinateSystem


```cpp
Inherits from GridCoordinateReferenceSystem<2U>
```



# class GeographicGridCoordinateSystem


```cpp
Inherits from GridCoordinateReferenceSystem<dimension>
```



## Functions

### type_name_static

```cpp
public static CRSType type_name_static()
```


### type_name

```cpp
public CRSType type_name()
```


### GeographicGridCoordinateSystem

```cpp
public void GeographicGridCoordinateSystem<dimension>(CoordinateSystem<dimension> coordinate_system, GeographicCoordinateSystemInfo info)
```


### ~GeographicGridCoordinateSystem

```cpp
public void ~GeographicGridCoordinateSystem<dimension>()
```


### clone

```cpp
public std::unique_ptr<GridCoordinateReferenceSystem<dimension>> clone()
```


### info

```cpp
public const GeographicCoordinateSystemInfo & info()
```




