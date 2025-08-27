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

# class MarkedObject


# class MarkedObject


# class MarkedObject


## Functions

### MarkedObject

```cpp
public void MarkedObject<Geometry>(Geometry && geometry)
```


### MarkedObject

```cpp
public void MarkedObject<Geometry>(Geometry && geometry, optional mark)
```


### set_geometry

```cpp
public void set_geometry(const Geometry & geometry)
```


### set_geometry

```cpp
public void set_geometry(Geometry && geometry)
```


### set_mark

```cpp
public void set_mark(const Mark & mark)
```


### set_mark

```cpp
public void set_mark(Mark && mark)
```


### geometry

```cpp
public const Geometry & geometry()
```


### mark

```cpp
public const std::optional<Mark> & mark()
```


### has_mark

```cpp
public bool has_mark()
```


### bounding_box

```cpp
public auto bounding_box()
```


### barycenter

```cpp
public auto barycenter()
```




# class MarkedObject


