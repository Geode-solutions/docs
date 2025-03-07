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

# class NormalFrameTransform


```cpp
Inherits from FrameTransform<3U>
```



# class NormalFrameTransform


```cpp
Inherits from FrameTransform<dimension>
```



## Functions

### NormalFrameTransform

```cpp
public void NormalFrameTransform<dimension>(const Frame<dimension> & from, const Frame<dimension> & to)
```


### ~NormalFrameTransform

```cpp
public void ~NormalFrameTransform<dimension>()
```


### apply

```cpp
public Frame<dimension> apply(const Frame<dimension> & frame)
```


### apply

```cpp
public Vector<dimension> apply(const Vector<dimension> & vector)
```


### apply

```cpp
public Point<dimension> apply(const Point<dimension> & point)
```




# class NormalFrameTransform


```cpp
Inherits from FrameTransform<2U>
```



