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

# class CoordinateReferenceSystem


## Functions

### ~CoordinateReferenceSystem

```cpp
public void ~CoordinateReferenceSystem<>()
```


### type_name

```cpp
public CRSType type_name()
```

### point

```cpp
public const Point<dimension> & point(index_t point_id)
```

### set_point

```cpp
public void set_point(index_t point_id, Point<dimension> point)
```

### register_coordinate_reference_system_type

```cpp
public void register_coordinate_reference_system_type(PContext & context, string_view name)
```


### CoordinateReferenceSystem

```cpp
protected void CoordinateReferenceSystem<>()
```




