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

# class DotSurfaceOutputImpl


## Functions

### DotSurfaceOutputImpl

```cpp
public void DotSurfaceOutputImpl<Mesh>(std::string_view filename, const Mesh & surface)
```


### ~DotSurfaceOutputImpl

```cpp
public void ~DotSurfaceOutputImpl<Mesh>()
```


### DotSurfaceOutputImpl

```cpp
public void DotSurfaceOutputImpl<Mesh>(const DotSurfaceOutputImpl<Mesh> & )
```


### operator=

```cpp
public DotSurfaceOutputImpl<Mesh> & operator=(const DotSurfaceOutputImpl<Mesh> & )
```


### write_file

```cpp
public void write_file()
```




