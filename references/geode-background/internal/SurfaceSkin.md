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

# struct SurfaceSkin


## Members

```cpp
public ModifiableObject solid

```

```cpp
public unique_ptr surface

```

```cpp
public unique_ptr surface_builder

```

```cpp
public unique_ptr background

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

```cpp
public BijectiveMapping skin_to_solid_vertex_mapping

```

```cpp
public bool solid_oriented

```



## Functions

### SurfaceSkin

```cpp
public void SurfaceSkin(const SurfaceSkin & )
```


### operator=

```cpp
public SurfaceSkin & operator=(const SurfaceSkin & )
```


### SurfaceSkin

```cpp
public void SurfaceSkin(ModifiableObject solid)
```


### SurfaceSkin

```cpp
public void SurfaceSkin(ModifiableObject solid, std::unique_ptr<TriangulatedSurface2D> && mesh, const GenericMapping<index_t> & corafinated_vertex_mapping, bool solid_oriented)
```


### SurfaceSkin

```cpp
public void SurfaceSkin(SurfaceSkin && other)
```


### operator=

```cpp
public SurfaceSkin & operator=(SurfaceSkin && other)
```


### ~SurfaceSkin

```cpp
public void ~SurfaceSkin()
```


### clone

```cpp
public SurfaceSkin clone()
```


### reset_skin

```cpp
public void reset_skin()
```




