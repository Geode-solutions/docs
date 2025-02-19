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

# struct Skin


## Members

```cpp
public unique_ptr surface

```

```cpp
public unique_ptr builder

```

```cpp
public unique_ptr modifier

```

```cpp
public GenericMapping skin_to_corafinated_vertex_mapping

```



## Functions

### Skin

```cpp
public void Skin(const Skin & )
```


### operator=

```cpp
public Skin & operator=(const Skin & )
```


### Skin

```cpp
public void Skin()
```


### Skin

```cpp
public void Skin(std::unique_ptr<TriangulatedSurface2D> && mesh, const GenericMapping<index_t> & corafinated_vertex_mapping)
```


### Skin

```cpp
public void Skin(Skin && other)
```


### ~Skin

```cpp
public void ~Skin()
```


### clone

```cpp
public Skin clone()
```




