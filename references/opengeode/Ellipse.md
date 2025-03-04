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

# class Ellipse


```cpp
Inherits from GenericEllipse<RefPoint<3U>, RefFrame<3U>, 3U>
```



# class Ellipse


```cpp
Inherits from GenericEllipse<RefPoint<2U>, RefFrame<2U>, 2U>
```



# class Ellipse


```cpp
Inherits from GenericEllipse<RefPoint<dimension>, RefFrame<dimension>, dimension>
```



## Functions

### Ellipse

```cpp
public void Ellipse<>(const Point<dimension> & center, const Frame<dimension> & axes)
```


### Ellipse

```cpp
public void Ellipse<>(const Ellipse<dimension> & other)
```


### Ellipse

```cpp
public void Ellipse<>(const OwnerEllipse<dimension> & other)
```


### operator=

```cpp
public Ellipse<dimension> & operator=(const Ellipse<dimension> & other)
```


### Ellipse

```cpp
public void Ellipse<>(Ellipse<dimension> && other)
```


### operator=

```cpp
public Ellipse<dimension> & operator=(Ellipse<dimension> && other)
```




