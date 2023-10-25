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

# class Lines


## Records

LineRangeBase

LineRange



## Functions

### Lines

```cpp
public void Lines<>(const Lines<> & )
```


### operator=

```cpp
public Lines<> & operator=(const Lines<> & )
```


### ~Lines

```cpp
public void ~Lines<>()
```


### nb_lines

```cpp
public index_t nb_lines()
```


### has_line

```cpp
public bool has_line(const uuid & id)
```


### line

```cpp
public const Line<dimension> & line(const uuid & id)
```


### lines

```cpp
public LineRange lines()
```


### save_lines

```cpp
public void save_lines(string_view directory)
```


### Lines

```cpp
protected void Lines<>()
```


### Lines

```cpp
protected void Lines<>(Lines<> && other)
```


### operator=

```cpp
protected Lines<> & operator=(Lines<> && other)
```




# class Lines


# class Lines


