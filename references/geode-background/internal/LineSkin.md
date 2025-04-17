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

# struct LineSkin


## Members

```cpp
public ModifiableObject solid

```

```cpp
public unique_ptr line

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



## Functions

### LineSkin

```cpp
public void LineSkin(const LineSkin & )
```


### operator=

```cpp
public LineSkin & operator=(const LineSkin & )
```


### LineSkin

```cpp
public void LineSkin(ModifiableObject solid)
```


### LineSkin

```cpp
public void LineSkin(ModifiableObject solid, std::unique_ptr<EdgedCurve1D> && mesh, const GenericMapping<index_t> & corafinated_vertex_mapping)
```


### LineSkin

```cpp
public void LineSkin(ModifiableObject solid, BackgroundLine && mesh, const GenericMapping<index_t> & corafinated_vertex_mapping)
```


### LineSkin

```cpp
public void LineSkin(LineSkin && other)
```


### operator=

```cpp
public LineSkin & operator=(LineSkin && other)
```


### ~LineSkin

```cpp
public void ~LineSkin()
```


### clone

```cpp
public LineSkin clone()
```




