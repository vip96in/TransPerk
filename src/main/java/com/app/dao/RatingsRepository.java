package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Ratings;


public interface RatingsRepository extends JpaRepository<Ratings, Integer> {

}
