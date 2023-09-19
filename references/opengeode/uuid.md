# struct uuid


 128-bit basic UUID type that allows comparison and sorting.



## Members

```cpp
public uint64_t ab
```

```cpp
public uint64_t cd
```



## Functions

### uuid

```cpp
public void uuid()
```


### uuid

```cpp
public void uuid(string_view string)
```


### operator==

```cpp
public _Bool operator==(const uuid & other)
```


### operator!=

```cpp
public _Bool operator!=(const uuid & other)
```


### operator<

```cpp
public _Bool operator<(const uuid & other)
```


### string

```cpp
public basic_string string()
```




