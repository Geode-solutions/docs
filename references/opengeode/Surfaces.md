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

# class Surfaces


# class Surfaces


## Records

SurfaceRangeBase

SurfaceRange



## Functions

### Surfaces

```cpp
public void Surfaces<>(const Surfaces<> & )
```


### operator=

```cpp
public Surfaces<> & operator=(const Surfaces<> & )
```


### ~Surfaces

```cpp
public void ~Surfaces<>()
```


### nb_surfaces

```cpp
public index_t nb_surfaces()
```


### has_surface

```cpp
public bool has_surface(const uuid & id)
```


### surface

```cpp
public const Surface<dimension> & surface(const uuid & id)
```


### surfaces

```cpp
public SurfaceRange surfaces()
```


### save_surfaces

```cpp
public void save_surfaces(string_view directory)
```


### Surfaces

```cpp
protected void Surfaces<>()
```


### Surfaces

```cpp
protected void Surfaces<>(Surfaces<> && other)
```


### operator=

```cpp
protected Surfaces<> & operator=(Surfaces<> && other)
```




# class Surfaces


