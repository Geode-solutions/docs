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

# class OwnerEllipse


```cpp
Inherits from GenericEllipse<Point<2U>, Frame<2U>, 2U>
```



# class OwnerEllipse


```cpp
Inherits from GenericEllipse<Point<dimension>, Frame<dimension>, dimension>
```



## Functions

### OwnerEllipse

```cpp
public void OwnerEllipse<>(Point<dimension> center, Frame<dimension> axes)
```


### OwnerEllipse

```cpp
public void OwnerEllipse<>(const OwnerEllipse<dimension> & other)
```


### operator=

```cpp
public OwnerEllipse<dimension> & operator=(const OwnerEllipse<dimension> & other)
```


### OwnerEllipse

```cpp
public void OwnerEllipse<>(OwnerEllipse<dimension> && other)
```


### operator=

```cpp
public OwnerEllipse<dimension> & operator=(OwnerEllipse<dimension> && other)
```




# class OwnerEllipse


```cpp
Inherits from GenericEllipse<Point<3U>, Frame<3U>, 3U>
```



