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

### register_coordinate_reference_system_type

```cpp
public static void register_coordinate_reference_system_type(PContext & context, std::string_view name)
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

### ~CoordinateReferenceSystem

```cpp
public void ~CoordinateReferenceSystem<value-parameter-0-0>()
```


### CoordinateReferenceSystem

```cpp
protected void CoordinateReferenceSystem<value-parameter-0-0>()
```




