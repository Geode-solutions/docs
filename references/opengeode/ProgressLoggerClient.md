# class ProgressLoggerClient


## Functions

### ~ProgressLoggerClient

```cpp
public void ~ProgressLoggerClient()
```


### start

```cpp
public void start(const uuid & progress_logger_id, const std::string & message, index_t nb_steps)
```

### update

```cpp
public void update(const uuid & progress_logger_id, index_t current_step, index_t nb_steps)
```

### completed

```cpp
public void completed(const uuid & progress_logger_id)
```

### failed

```cpp
public void failed(const uuid & progress_logger_id)
```

### ProgressLoggerClient

```cpp
protected void ProgressLoggerClient()
```




