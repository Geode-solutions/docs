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

# class AttributeCoordinateReferenceSystem

# class AttributeCoordinateReferenceSystem


```cpp
Inherits from CoordinateReferenceSystem<dimension>
```



## Functions

### AttributeCoordinateReferenceSystem

```cpp
public void AttributeCoordinateReferenceSystem<dimension>(AttributeManager & manager)
```


### AttributeCoordinateReferenceSystem

```cpp
public void AttributeCoordinateReferenceSystem<dimension>(AttributeManager & manager, string_view attribute_name)
```


### ~AttributeCoordinateReferenceSystem

```cpp
public void ~AttributeCoordinateReferenceSystem<dimension>()
```


### type_name_static

```cpp
public CRSType type_name_static()
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


### attribute_name

```cpp
public string_view attribute_name()
```


### nb_points

```cpp
public index_t nb_points()
```


### AttributeCoordinateReferenceSystem

```cpp
protected void AttributeCoordinateReferenceSystem<dimension>()
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




# class AttributeCoordinateReferenceSystem

# class AttributeCoordinateReferenceSystem

